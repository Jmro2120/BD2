const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class identificationType extends Model{}


identificationType.init({
    // Attributes
    identificationTypeId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    identificationTypeName:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'identificationType',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = identificationType;