const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
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
    tag_name:{
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
