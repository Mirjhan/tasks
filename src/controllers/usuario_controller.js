const getUsuarios = (req, res) => {
    res.json('Listar todos los usuarios')
}
const getUsuario = (req, res) => {
    const {id} = req.params
    res.json(`Listar usuario #${id}`)
}
const createUsuario =  (req, res) => {
    res.json('Crear usuario')
}
const deleteUsuario = (req, res) => {
    const {id} = req.params
    res.json(`Eliminar usuario #${id}`)
}
const updateUsuario = (req, res) => {
    res.json('Actualizar usuario')
}
module.exports = {
    getUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario
}