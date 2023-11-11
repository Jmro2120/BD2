require('express');
const departament = require('../models/departament');

async function listDepartaments(req, res){
    try {
        await departament.findAll({
            attributes: [
                'departamentId',
                'departamentName'
            ],
            order: ['departamentName']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    listDepartaments
}