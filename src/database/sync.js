
const connection = require('./connection');

const branch = require('../models/branch');
const city = require('../models/city');
const departament = require('../models/departament');
const supplier = require('../models/supplier');
const categoryProduct = require('../models/categoryProduct');
const product = require('../models/product');
const rol = require('../models/rol');
const identificationType = require('../models/identificationType');
const users = require('../models/users');
const saleStatus = require('../models/saleStatus');
const saleType = require('../models/saleType');
const sale = require('../models/sale');
const productSale = require('../models/productSale');


//JSON FILES
const departamentjson = require('./jsonfiles/departamentjson');
const citysjsons = require('./jsonfiles/citysjson');
async function sync(){
    //Foreing Keys
    //Departement-city
    departament.hasMany(city,{
        foreignKey:'departamentId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    city.belongsTo(departament,{
        foreignKey:'departamentId'
    });

    //City-Department
    city.belongsTo(departament,{
        foreignKey:'departamentId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    departament.hasMany(city,{
        foreignKey:'departamentId'
    });


    //City-restaurante
    city.hasMany(branch,{
        foreignKey:'cityId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    branch.belongsTo(city,{
        foreignKey:'cityId'
    });
    branch.belongsTo(city,{
        foreignKey:'cityId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    city.hasMany(branch,{
        foreignKey:'cityId'
    });

     //bracnh product
     branch.hasMany(product,{
        foreingkey:'branchId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    product.belongsTo(branch,{
        foreingkey:'branchId'
    });
    //product branch
    product.belongsTo(branch,{
        foreignKey:'branchId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    branch.hasMany(product,{
        foreignKey:'branchId'
    });


    //supplier product
    supplier.hasMany(product,{
        foreingkey:'supplierId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    product.belongsTo(supplier,{
        foreingkey:'supplierId'
    });
    //product supplier
    product.belongsTo(supplier,{
        foreignKey:'supplierId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    supplier.hasMany(product,{
        foreignKey:'supplierId'
    });

    //categoryProduct product
    categoryProduct.hasMany(product,{
        foreingkey:'categoryProductId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    product.belongsTo(categoryProduct,{
        foreingkey:'categoryProductId'
    });
    //product categoryProduct
    product.belongsTo(categoryProduct,{
        foreignKey:'categoryProductId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    categoryProduct.hasMany(product,{
        foreignKey:'categoryProductId'
    });



    //rol users
    rol.hasMany(users,{
        foreingkey:'rolId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    users.belongsTo(rol,{
        foreingkey:'rolId'
    });
    //users rol
    users.belongsTo(rol,{
        foreignKey:'rolId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    rol.hasMany(users,{
        foreignKey:'rolId'
    });

    //identificationType users 
    identificationType.hasMany(users,{
        foreingkey:'identificationTypeId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    users.belongsTo(identificationType,{
        foreingkey:'identificationTypeId'
    });
    //users identificationType
    users.belongsTo(identificationType,{
        foreignKey:'identificationTypeId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    identificationType.hasMany(users,{
        foreignKey:'identificationTypeId'
    });
    
    //sale users 
    //REVISAR
    sale.hasMany(users,{
        foreingkey:'saleId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    users.hasMany(sale,{
        foreingkey:'saleId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    //users sale
    users.hasMany(sale,{
        foreingkey:'saleId'
    });
    sale.hasMany(users,{
        foreingkey:'saleId'
    });


    //saleType sale 
    saleType.hasMany(sale,{
        foreingkey:'saleTypeId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    sale.belongsTo(saleType,{
        foreingkey:'saleTypeId'
    });
    //sale saleType
    sale.belongsTo(saleType,{
        foreignKey:'saleTypeId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    saleType.hasMany(sale,{
        foreignKey:'saleTypeId'
    });


    //saleStatus sale 
    saleStatus.hasMany(sale,{
        foreingkey:'saleStatusId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    sale.belongsTo(saleStatus,{
        foreingkey:'saleStatusId'
    });
    //sale saleStatus
    sale.belongsTo(saleStatus,{
        foreignKey:'saleStatusId',
        onDelete:'RESTRICT',
        onUpdate: 'CASCADE'
    });
    saleStatus.hasMany(sale,{
        foreignKey:'saleStatusId'
    });


    //sale-product-productsale
    //REVISAR
    productSale.belongsTo(product,{
        foreingkey:'productId'
    });

    productSale.belongsTo(sale,{
        foreingkey:'productId'
    });
    //productsale-product-sale
    product.belongsTo(productSale,{
        foreingkey:'productId'
    });

    sale.belongsTo(productSale,{
        foreingkey:'productId'
    });
    
    //Generate connection
    await connection.sync({force:false});
    await connection.authenticate().then(()=> {
        console.log('Synchronized DataBase')
    }).catch((error)=>{
        console.log('Error syncing DataBase' + error)
    });
    //upload json files
    departamentjson.createDepartaments();
    citysjsons.createCities();
}

sync();


