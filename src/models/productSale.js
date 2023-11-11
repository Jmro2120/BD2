const { Model,DataTypes } = require('sequelize');
const connection = require('../database/connection');


class productSale extends Model{ }

productSale.init({
    productSaleId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    saleId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    productSaleQuantity:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    warrantyDuration:{
        type : DataTypes.DATE,
        allowNull: false
    },
    warrantyDescription:{
        type : DataTypes.STRING,
        unique: true
    }
},{
    sequelize:connection,
    modelName: 'productSale',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = productSale;