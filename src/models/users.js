const { Model,DataTypes } = require('sequelize');
const connection = require('../database/connection');


class users extends Model{ }

users.init({
    usersId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identificationTypeId:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    usersIdentificationNumber:{
        type : DataTypes.STRING,
        allowNull: false
    },
    usersName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    userBornDate:{
        type : DataTypes.DATE,
        allowNull: false
    },
    usersPhone:{
        type : DataTypes.STRING,
        allowNull: false
    },
    usersAddres:{
        type : DataTypes.STRING,
        allowNull: false
    },
    usersEmail:{
        type : DataTypes.STRING,
        allowNull: false
    },
    idRol:{
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'users',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = users;