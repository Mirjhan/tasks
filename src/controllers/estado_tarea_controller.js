
const getEstadoTareas = (req, res) => {
    res.json('Listar todos los estados de tarea')
}
const getEstadoTarea = (req, res) => {
    const {id} = req.params
    res.json(`Lista el estado de tarea #${id}`)
}
const createEstadoTarea = (req, res) => {
    res.json('Crear estados de tareas')
}
const deleteEstadoTarea = (req, res) => {
    const {id} = req.params
    res.json(`Eliminar el estado de tarea #${id}`)
}
const updateEstadoTarea = (req, res) => {
    res.json('Actualizar estado de tarea')
}
module.exports = {
    getEstadoTareas,
    getEstadoTarea,
    createEstadoTarea,
    deleteEstadoTarea,
    updateEstadoTarea
}