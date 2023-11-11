const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class saleType extends Model{}


saleType.init({
    // Attributes
    saleTypeId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    saleTypeDescription:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'saleType',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = saleType;