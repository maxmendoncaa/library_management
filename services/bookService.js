import { Book } from '../models/bookModel.js'

const bookService = {};

bookService.getAllBooks = async () => {
    const books = await Book.findAll();
    return books.map((b) => {
        return {id:b.id,name: b.name, description: b.description, status:b.status, count:b.count};
    });
}

bookService.getBookById  = async (id) => {
    const book = await Book.findOne({ where: { id: id } });
    if (book != null)
        return {name: book.name, description: book.description, status:book.status, count:book.count};
}

bookService.addBook  = async (book) => {
    const b = await Book.create({ name: book.name, description: book.description , status:'Available',count: 1});
    return b;
}

bookService.updateBook  = async (name, book) => {
    await Book.update({ name: book.name, description: book.description, status: book.status, count: book.count }, {
        where: {
            name: name
        }
    });
}

bookService.deleteBook  = async (name) => {
    await Book.destroy({
        where: {
            name: name
        }
    });
}

bookService.getBookByName  = async (name) => {
    const book = await Book.findOne({ where: { name: name } });
    if (book != null)
        return {id:book.id,name: book.name, description: book.description, status:book.status, count:book.count};
}
/*
bookService.borrowBook  = async (id) => {
    const books = await Book.findAll();
    return books.map((b) => {
        where:{id:id}
        return {name: b.name, description: b.description, status:b.status, count:b.count}
    });
}  
//bookService.getAllBooks();*/
export { bookService }


