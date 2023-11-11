require('./database/sync');
const express = require ('express');
const app = express();
const port = process.env.PORT || 8000;



const departamentrouter = require('./routers/departamentrouters');
const cityrouter = require('./routers/citysrouters');
const branchrouter= require('./routers/branchrouters');
const productrouter= require('./routers/productrouters');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(port, ()=>  {
    console.log('the application is running' + port);
});

app.use('/api', departamentrouter);
app.use('/api',cityrouter);
app.use('/api', branchrouter);
app.use('/api', productrouter);