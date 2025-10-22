
const Usuario = require('../models/usuario')

const getUsuarios = async (req, res) => {

    try {
        const result = await Usuario.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}
const getUsuario = async (req, res) => {

    const { id } = req.params
    try {
        const result = await Usuario.findByPk(id)
        if (result == null) return res.status(404).json({ message: 'Usuario nulo.' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}
const createUsuario = async (req, res) => {
    const { nombre, apellido, correo, contrasena } = req.body
    try {
        const newUsuario = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contrasena: contrasena,
        })
        res.status(200).json(newUsuario)
    } catch (error) {
        res.status(500).json(error)
    }

}
const deleteUsuario = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Usuario.findByPk(id)
        await result.destroy()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { id, nombre, apellido, correo, contrasena } = req.body
        const result = await Usuario.findByPk(id)
        result.set({
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contrasena: contrasena,
        })
        await result.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateAvatar = async (req, res) => {
    console.log(req.file)
    console.log(req.body)
    try {
        const { id } = req.body
        const { filename } = req.file
        const result = await Usuario.findByPk(id)
        result.set({
            avatar: filename,
        })
        await result.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    updateAvatar,
}