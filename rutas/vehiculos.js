const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { 
    crearVehiculo,
    editarVehiculo,
    eliminarVehiculo,
    marcarVendido,
    obtenerVehiculos
 } = require("../controladores/vehiculo");

const { verificarToken } = require('../controladores/autenticacion');


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'imagenes/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Crear un nuevo vehículo
router.post('/vehiculo', verificarToken, upload.single('imagen'), crearVehiculo);

// Editar un vehículo existente
router.put('/vehiculo/:id', verificarToken, upload.single('imagen'), editarVehiculo);


// Obtener todos los vehículos
router.get('/vehiculos', obtenerVehiculos)

// Eliminar un vehículo existente
router.delete('/vehiculo/:id', verificarToken, eliminarVehiculo)

// Cambiar estado del vehículo a vendido
router.patch('/vehiculo/vendido/:id', verificarToken, marcarVendido);

module.exports = router;





