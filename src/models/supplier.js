const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class supplier extends Model{}


supplier.init({
    // Attributes
    supplierId:{
        type : DataTypes.STRING,
        primaryKey: true,
        unique: true
    },
    supplierNit:{
        type : DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    supplierName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    supplierPhone:{
        type : DataTypes.STRING,
        allowNull: false
    },
    supplierEmail:{
        type : DataTypes.STRING,
        allowNull: false
    },
    supplierAdress:{
        type : DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize:connection,
    modelName: 'supplier',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = supplier;