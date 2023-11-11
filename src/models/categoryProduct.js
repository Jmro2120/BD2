const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class categoryProduct extends Model{}


categoryProduct.init({
    // Attributes
    categoryProductId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    categoryProductDescribe:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'categoryProduct',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = categoryProduct;