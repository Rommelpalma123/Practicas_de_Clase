const { response } = require('express');
const { Producto } = require('../models')

class controllerProducto
{
    getProducts = async ( req, res = response ) =>
    {
        // GET http://localhost:3000/productos   ?limite=100?desde=1
        const { limite = 10, desde = 0 } =req.query; 
        const query = { estado:true }

        const [ total, productos ] = await Promise.all([
        
        Producto.countDocuments(query),
        // definimos rango de productos que se quiere mostrar 
        Producto.find(query).skip(Number(desde)).limit(Number(limite))

        ])
        // devulve todos producto
        res.json({ 

            total,
            productos
        })
    }

    getProduct = async ( req, res = response ) => 
    {
        const { id } = req.params
        const producto = await Producto.findById(id);
        res.json(producto); 
    }

    createProduct = async ( req, res = response ) => 
    {
        const { estado, usuario, ...body } = req.body
        // encontrar nombre por un solo nombre 
        const productorepetido = await Producto.findOne({nombre: body.nombre})
        if(productorepetido)
        {
            return res.status(400).json({

                msg:`El producto ${productorepetido.nombre} ya existe`
            })
        }
        const data = 
        {
            ...body,
            nombre: body.nombre
        }

        const product = new Producto(data);
        const newProduct = await product.save();
        res.json(newProduct);
    }

    updateProduct = async ( req, res = response ) => 
    {}
    deleteProduct = async ( req, res = response ) => 
    {}

}

module.exports = {

    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
};
