const Customers = require('../models/Customers');


//gregar cliente
exports.add = async (req, res) =>{
    const customer = new Customers(req.body);
    try{
        await customer.save();
        res.json({message: 'Nuevo Cliente agregado'})
    }catch (error){
        if(error.code === 11000){
            res.status(400).json({
                message: `Ya existe un cliente con esa cedula: ${req.body.cedula} `,
            });
        }else{
            res.status(400).json({
                message: 'Error al procesar la petición'
            });
        }
        
    }
};


//primera acción: index

exports.list = async(req,res)=>{
    try{
    const customers = await Customers.find({});
    res.json(customers);
    } catch (error){
        console.log(error);
        res.send(error);
        next();
    }
};


//Buscar por cedula
exports.show =async(req,res)=>{
    try {
        const customer = await Customers.find({cedula: new RegExp(req.params.cedula,'i'),
    });
        if(!customer){
            res.status(404).json({
                message: 'El cliente no existe'
            });
        }
        res.json(customer);
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
};

//Actualizar cliente
exports.update = async (req,res,next) =>{
    try {
        const customer = await Customers.findOneAndUpdate(
            {cedula: req.params.cedula},
            req.body,
            {new: true}
        );
        res.json({
            message:'Cliente actualizado Correctamente'
        });
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}


//Eliminar Cliente
exports.delete = async (req,res,next) =>{
    try {
        await Customers.findOneAndDelete({cedula:req.params.cedula});
        res.json({message: 'El cliente ha sido eliminado'});
        
    } catch (error) {
        res.status(400).json({
            message:'Error al procesar la petición'
        });
    }
}







