const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class rol extends Model{}


rol.init({
    // Attributes
    rolId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    rolName:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'rol',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = rol;