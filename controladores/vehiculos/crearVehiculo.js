const Vehiculo = require('../../modelos/vehiculo');

const crearVehiculo = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Debe subir una imagen"
            });
        }

        if (!req.usuario) {
            return res.status(401).json({
                message: "Usuario no autenticado"
            });
        }

        const vehiculo = new Vehiculo({
            marca: req.body.marca,
            modelo: req.body.modelo,
            anno: req.body.anno,
            precio: req.body.precio,
            imagen: req.file.filename,
            combustible: req.body.combustible,
            color: req.body.color,
            transmision: req.body.transmision,
            condicion: req.body.condicion,
            usuario: req.usuario.id
        });

        const vehiculoCreado = await vehiculo.save();

        res.status(201).json(vehiculoCreado);

    } catch (error) {
        console.error("ERROR CREAR VEHICULO:", error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    crearVehiculo
};