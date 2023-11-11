const { Model,DataTypes } = require('sequelize');
const connection = require('../database/connection');


class departament extends Model{ }

departament.init({
    departamentId:{
        type : DataTypes.STRING,
        primaryKey: true,
    },
    departamentName:{
        type : DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'departament',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = departament;