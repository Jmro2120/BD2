const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class product extends Model{}


product.init({
    // Attributes
    productId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    productName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    productDescription:{
        type : DataTypes.STRING,
        allowNull: false
    },
    productValue:{
        type : DataTypes.DOUBLE,
        allowNull: false
    },
    productQuantity:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    branchId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    supplierId:{
        type : DataTypes.STRING,
        allowNull: false
    },
    categoryProductId:{
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'product',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = product;