const mongoose = require("mongoose");

const preguntaSchema = new mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehiculo",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    question: {
        type: String,
        required: true
    },
    fechaPregunta: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pregunta", preguntaSchema);