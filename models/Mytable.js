'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  MyTable.init({
    Geo_Point: DataTypes.STRING,
    Geo_Shape: DataTypes.STRING,
    codcen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false 
    },
    dlibre: DataTypes.STRING,
    dgenerica_: DataTypes.STRING,
    despecific: DataTypes.STRING,
    regimen: DataTypes.STRING,
    adrees: DataTypes.STRING,
    codpos: DataTypes.INTEGER,
    municipio_: DataTypes.STRING,
    provincia_: DataTypes.STRING,
    telef: DataTypes.INTEGER,
    fax: DataTypes.INTEGER,
    mail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MyTable',
    tableName: 'my_table',
    timestamps: false, 
    freezeTableName: true
  });
  return MyTable;
};