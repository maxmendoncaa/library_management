import { Sequelize, Model, DataTypes } from 'sequelize';
import { db } from './db.js'

const Book = db.define('books', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
  count: DataTypes.INTEGER
});

export { Book }
