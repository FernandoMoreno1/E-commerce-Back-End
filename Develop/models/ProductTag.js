const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
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
    product_id:{
      type: DataTypes.INTEGER,
      //refernce the product models id
      reference:{
        model:'product',
        key:'id'
      }
    },
    tag_id:{
      type: DataTypes.INTEGER,
      //reference the tag models id
      reference:{
        model:'tag',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
