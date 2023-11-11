const express = require ('express');
const departamentcontroller = require('../controllers/departamentcontroller');
const router = express.Router();

router.get("/listDepartaments", departamentcontroller.listDepartaments);

module.exports=router;