// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      //does not allow null numbers
      allowNull: false,
      //set as primary key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      //does not allow null numbers
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      //does not allow null values
      allowNull: false,
      //validate that the value is a decimal
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      //does not allow null values
      allowNull: false,
      //sets default value to 10
      defaultVAlue: 10,
      //validates that the value is numeric
      validate: {
        isNumeric: true
      }
    },
    category_id:{
      type: DataTypes.INTEGER,
      //references the category models id 
      reference:{
        model:'category',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
