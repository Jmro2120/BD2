const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class saleStatus extends Model{}


saleStatus.init({
    // Attributes
    saleStatusId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    saleStatusDescription:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'saleStatus',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = saleStatus;