const Usuario = require("../models/usuario")

const postLogin = async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
        const result = await Usuario.findOne({
            where: {
                correo: correo,
                contrasena: contrasena
            }
        })
        if (result == null) return res.status(404).json({ mensaje: 'No se encontro valores' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

const postRegister = async (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body
    try {
        const result = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contrasena: contrasena
        })
        if (result == null) return res.status(404).json({ mensaje: 'No se encontro valores' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }



}
module.exports = {
    postLogin,
    postRegister
}