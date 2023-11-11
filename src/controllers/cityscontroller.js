require('express');
const citys = require('../models/city');

async function listCitys(req, res){
    try {
        await citys.findAll({
            attributes: [
                'cityId',
                'cityName',
                'departamentId'
            ],
            order: ['cityName']
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
    listCitys
}