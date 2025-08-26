const Producto = require('../models/Producto');

exports.obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

exports.crearProducto = async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};