const { Model,DataTypes } = require('sequelize');
const connection = require('../database/connection');


class sale extends Model{ }

sale.init({
    saleId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clientId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    employedId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    saleDate:{
        type : DataTypes.DATE,
        allowNull: false
    },
    saleDiscount:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    ivaSale:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    saleTypeId:{
        type : DataTypes.INTEGER,
        unique: true
    },
    saleStatusId:{
        type : DataTypes.INTEGER,
        unique: true
    }
},{
    sequelize:connection,
    modelName: 'sale',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = sale;