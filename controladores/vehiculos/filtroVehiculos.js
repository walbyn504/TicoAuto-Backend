const Vehiculo = require("../../modelos/vehiculo");

const filtroVehiculos = async (req, res) => {
    try {
        const { marca, estado, minPrecio, maxPrecio } = req.query;
        let filtro = {};

        // Filtro de texto (Marca y Estado)
        if (marca) filtro.marca = { $regex: marca, $options: 'i' };
        if (estado) filtro.estado = estado;

        // Filtro de Rango (Precio)
        if (minPrecio || maxPrecio) {
            filtro.precio = {};
            if (minPrecio) filtro.precio.$gte = Number(minPrecio);
            if (maxPrecio) filtro.precio.$lte = Number(maxPrecio);
        }

        const vehiculos = await Vehiculo.find(filtro).sort({ createdAt: -1 });
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error", error: error.message });
    }
};

module.exports = { filtroVehiculos };