 
import { db } from "./models/db.js"
import { bookService } from './services/bookService.js';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';



async function main() {
    await db.authenticate()
    await db.sync()
    let answer = 0;
    do {
        const rl = readline.createInterface({ input, output });
        console.log("\n1. List all books\n2: Add book\n3: Update book\n4: Delete book\n5: Borrow Book\n6: Exit");
        answer = await rl.question('Enter your choice: ');
        switch(parseInt(answer))  {
            case 1:
                let books = await bookService.getAllBooks()
                books.forEach((b) => console.log(`Name: ${b.name}, Description: ${b.description}, Status: ${b.status}, Count: ${b.count}`))
                break;
            case 2:
                let bookName = await rl.question('Enter Book Name: ');
                let bookDesc= await rl.question('Enter Book Description: ');
                let createdBook = await bookService.addBook({name: bookName, description: bookDesc})
                console.log(`Created Book Name: ${createdBook.name}, Description: ${createdBook.description},Status:${createdBook.status},Books available:${createdBook.count}`)
                break;
            case 3:
                let name=await rl.question('Enter Book name to update: ');
                let bookNamee = await rl.question('Enter Book Name: ');
                let bookDescr= await rl.question('Enter Book Description: ');
                let bookCount=parseInt(await rl.question('Enter book count: '));
                let availability;

                if(bookCount==0)
                   availability='Unavailable'
                else
                    availability='Available'
                await bookService.updateBook(name, {name: bookNamee, description: bookDescr, status: availability, count: bookCount})
                break;
            case 4:
                let id_delete=await rl.question('Enter Book name to delete: ');
                await bookService.deleteBook(id_delete);
                break;
            case 5:
                let name_borrow=await rl.question('Enter Book name to borrow: ');
                let books_ = await bookService.getBookByName(name_borrow)
                let status_=""   
                if(books_.count==0)
                    console.log("Book unavailable")
                else    
                    if(books_.count==1)
                    status_="Unavailable"
                await bookService.updateBook(name_borrow , {name: books_.name, description: books_.description, status: status_, count: books_.count-1})
                 break;
            default:
                break;
        }
        rl.close()

    } while (answer != 6);


}


main()

