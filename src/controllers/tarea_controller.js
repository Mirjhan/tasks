const Tarea = require("../models/tarea")

const getTareas = async (req, res) => {

    /*
        Tarea.findAll()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    */
   //

    try {
        const result = await Tarea.findAll()  
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getTarea = (req, res) => {
    const { id } = req.params
    res.json(`Lista tarea #${id}`)
}

const createTarea = async (req, res) => {
    const { nombre, descripcion } = req.body
    try {
        const newTarea = await Tarea.create({
            nombre: nombre,
            descripcion: descripcion,
        })
        res.status(200).json(newTarea)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteTarea = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Tarea.findByPk(id)
        await result.destroy()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTarea = async (req, res) => {
    try {
        const { id, nombre, descripcion } = req.body
        const result = await Tarea.findByPk(id)
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
    getTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea,
}