const { Model,DataTypes} = require('sequelize');
const connection = require('../database/connection');


class city extends Model{}


city.init({
    // Attributes
    cityId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        unique: true
    },
    cityName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    departamentId:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'city',
    paranoid: true,
    //borrado lojico de datos
    deletedAt: 'destroyTime'
})

module.exports = city;