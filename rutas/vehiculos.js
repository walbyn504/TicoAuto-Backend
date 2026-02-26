const express = require('express');
const router = express.Router();

const { 
    crearVehiculo,
    editarVehiculo,
    eliminarVehiculo,
    marcarVendido
 } = require("../controladores/vehiculo");

const { verificarToken } = require('../controladores/autenticacion');

// Ruta para crear un nuevo vehículo
router.post('/vehiculo', verificarToken, crearVehiculo)

// Ruta para editar un vehículo existente
router.put('/vehiculo/:id', verificarToken, editarVehiculo)

// Ruta para eliminar un vehículo existente
router.delete('/vehiculo/:id', verificarToken, eliminarVehiculo)

// Cambiar estado del vehículo a vendido
router.patch('/vehiculo/vendido/:id', verificarToken, marcarVendido);

module.exports = router;





