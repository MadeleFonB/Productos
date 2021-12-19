const Orders = require('../models/Orders');
//Agregar orden
exports.add = async (req,res,next) =>{
    try {
    const order = new Orders(req.body);
    await order.save();
    res.json(order);
        
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe una orden con el code: ${req.body.code} `,
            });  
        }else{
            res.status(400).json({
                message: 'Error al rpcesar la petición'
            });
        }
        
    }
};


//mostrar ordenes
exports.list = async (req,res,next) =>{
    try{
        const orders = await Orders.find({})
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });
        res.json(orders);
            
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la petición'
        });

    }
};

//Lectura de orden por codigo
exports.show = async (req,res,next) =>{
    try {
        const order = await Orders.find({code: new RegExp(req.params.code,'i')})
        .populate('customer')
        .populate({
            path: 'products.product',
            model: 'Products'
        });
        if(!order){
            res.status(404).json({message: 'La orden no existe'});
            next()

        }
        res.json(order);
        
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }

};


exports.update = async (req,res,next) =>{
    try {
        const order = await Orders.findOneAndUpdate({code: req.params.code},
            req.body,
            {new:true},
            )
            .populate('customer')
            .populate({
            path: 'products.product',
            model: 'Products'
            });
        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};




exports.delete = async (req,res,next) =>{
    try {
        await Orders.findOneAndDelete({code: req.params.code});
        res.json({message: 'La orden ha sido eliminada'});
        
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la petición'
        });
    }
};


exports.byCustomer = async (req,res,next) =>{
try {
    const orders = await Orders.find({customer:req.params.id})
    .populate('customer')
            .populate({
            path: 'products.product',
            model: 'Products'
            });
            res.json(orders);
} catch (error) {
    res.status(400).json({
        message: 'Error al procesar la petición'
    });
}
};


exports.search = async (req,res,next)=>{
    try {
        const orders = await Orders.customer.find({
            name: new RegExp(req.params.query,'i'),
        });
        res.json(orders);
        
    } catch (error) {
        res.status(400).json({
            message: ' Error al procesar la petición'
        });
    }
    
};


