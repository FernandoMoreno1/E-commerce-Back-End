const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      //doesnt allow null values
      allowNull: false,
      //sets as primary key
      primaryKey: true,
      //auto increasement
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      //doesnt allow null values
      allowNull: false,
    }
  }, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
}
);

module.exports = Category;
