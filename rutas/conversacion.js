const express = require('express');
const router = express.Router();

const { verificarToken } = require('../controladores/autenticacion/verificarToken');
const obtenerPreguntasEnviadas = require('../controladores/conversacion/obtenerPreguntasEnviadas');

router.get('/pregunta/obtenerMisPreguntas', verificarToken, obtenerPreguntasEnviadas);

module.exports = router;