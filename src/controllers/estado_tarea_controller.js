const EstadoTarea = require("../models/estado_tarea")

const getEstadoTareas =  async(req, res) => {
    try {
        const result = await EstadoTarea.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
const getEstadoTarea = async (req, res) => {
    const {id} = req.params
    try {
        const result = await EstadoTarea.findByPk(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        
    }
}
const createEstadoTarea = async (req, res) => {
    const {nombre, descripcion } = req.body
    try {
        const newEstadoTarea = await EstadoTarea.create({
            nombre: nombre,
            descripcion: descripcion,
        })
        res.status(200).json(newEstadoTarea)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteEstadoTarea = async (req, res) => {
    const {id} = req.params
    try {
        const result = await EstadoTarea.findByPk(id)
        await result.destroy()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateEstadoTarea =async (req, res) => {
    try {
        const {id, nombre, descripcion } = req.body
        const result = await EstadoTarea.findByPk(id)
        result.set({
            nombre: nombre,
            descripcion: descripcion,
        })
        await result.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    getEstadoTareas,
    getEstadoTarea,
    createEstadoTarea,
    deleteEstadoTarea,
    updateEstadoTarea
}