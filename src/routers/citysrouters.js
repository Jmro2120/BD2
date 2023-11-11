const express = require ('express');
const citycontroller = require('../controllers/cityscontroller');
const router = express.Router();

router.get("/listCitys", citycontroller.listCitys);

module.exports=router;