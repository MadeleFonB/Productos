const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customersController');
const productsController = require('../controllers/productsController');
const ordersController = require('../controllers/ordersController');

/*router.get('/',(req,res)=>{
    res.render('index',{title:"Pagina  Inicio"});
});*/

//Clientes



module.exports = function(){

    //post: /customers
    router.post('/customers', customersController.add);
    // get: /customers
    router.get('/customers', customersController.list);
    //leer cliente
    //get: /customers/cedula
    router.get('/customers/:cedula',customersController.show);
    //put:/customers/cedula
    router.put('/customers/:cedula',customersController.update);
    //delete:/customers/:id
    router.delete('/customers/:cedula',customersController.delete);


    //Productos
    router.post('/products', productsController.add);
    // get: /products
    router.get('/products', productsController.list);
    //leer producto
    //get: /products/code
    router.get('/products/:code',productsController.show);
    //put:/products/code
    router.put('/products/:code',productsController.update);
    //delete:/products/code
    router.delete('/products/:code',productsController.delete);



    //Ordenes
    router.post('/orders', ordersController.add);
    router.get('/orders', ordersController.list);
    router.get('/orders/:code', ordersController.show);
    router.put('/orders/:code', ordersController.update);
    router.delete('/orders/:code', ordersController.delete);


    router.get('/indexOrder',(req,res)=>{
        res.render('indexOrder');
    });


    router.get('/indexCustomer',(req,res)=>{
        res.render('indexCustomer');
    });

    router.get('/addOrder',(req,res)=>{
        res.render('addOrder');
    });
    router.get('/addCustomer',(req,res)=>{
        res.render('addCustomer');
    });
    router.get('/addProduct',(req,res)=>{
        res.render('addProduct');
    });
    router.get('/carta',(req,res)=>{
        res.render("carta");
    });

    router.get('/',(req,res)=>{
    res.render('index');
    });

    

    



    return router;
};












