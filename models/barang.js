'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Barang.init({
    barangNama: DataTypes.STRING,
    barangPrice: DataTypes.INTEGER,
    barangDes: DataTypes.STRING,
    barangBrand: DataTypes.STRING,
    barangQuantity: DataTypes.INTEGER,
    barangCategoryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};