const Products = require('../models/Products');

//gregar producto
exports.add = async (req, res) =>{
    const product = new Products(req.body);
    try{
        await product.save();
        res.json({message: 'Nuevo Producto agregado'})
    }catch (error){
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe un producto con el code: ${req.body.code} `,
            });  
        }else{
            res.status(400).json({
                message: 'Error al rpcesar la petición'
            });
        }
        
        
    }
};

//listar productos

exports.list = async(req,res)=>{
    try{
    const products = await Products.find({});
    res.json(products);
    } catch (error){
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
        console.log(error);
        res.send(error);
        next();
    }
};


//leer producto por codigo
exports.show =async(req,res)=>{
    try {
        const product = await Products.find({code: new RegExp(req.params.code,'i'),
    });
        if(!product){
            res.status(404).json({
                message: 'El cliente no existe'
            });
        }
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};


//Actualizar producto
exports.update = async (req,res,next) =>{
    try {
        const product = await Products.findOneAndUpdate(
            {code: req.params.code},
            req.body,
            {new: true}
        );
        res.json({
            message:'Producto actualizado Correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};


//Eliminar Producto
exports.delete = async (req,res,next) =>{
    try {
        await Products.findOneAndDelete({code:req.params.code});
        res.json({message: 'El producto ha sido eliminado'});
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}







