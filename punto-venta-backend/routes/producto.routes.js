const express = require('express');
const router = express.Router();
const { obtenerProductos, crearProducto } = require('../controllers/producto.controller');

router.get('/', obtenerProductos);
router.post('/', crearProducto);

module.exports = router;