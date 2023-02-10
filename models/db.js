import { Sequelize, Model, DataTypes } from 'sequelize';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'C:\\Users\\Max\\node_files\\aa\\\library-mgmt\\books.db',
  logging: false
});


export { db }
