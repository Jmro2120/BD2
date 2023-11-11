const { Model,DataTypes } = require('sequelize');
const connection = require('../database/connection');


class branch extends Model{ }

branch.init({
    branchId:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    branchName:{
        type : DataTypes.STRING,
        allowNull: false
    },
    branchlAddres:{
        type : DataTypes.STRING,
        allowNull: false
    },
    branchPhone:{
        type : DataTypes.STRING,
        allowNull: false
    },
    cityId:{
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize:connection,
    modelName: 'branch',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = branch;