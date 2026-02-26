const usuario = require('../modelos/usuario');
const bcrypt = require('bcrypt');

const registrarUsuario = async (req, res) => {
    const { nombre, primerApellido, segundoApellido, email, password } = req.body;

    try {
        // Verificar si el email ya está registrado
        const usuarioExistente = await usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado." });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const nuevoUsuario = new usuario({
            nombre,
            primerApellido,
            segundoApellido,
            email,
            password: hashedPassword
        });

        // Guardar el nuevo usuario en la BD
        const usuarioGuardado = await nuevoUsuario.save();
        return res.status(201).json(usuarioGuardado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registrarUsuario
};