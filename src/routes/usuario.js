const express = require('express')
const router = express.Router()
const {
    getUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario
} = require('./../controllers/usuario_controller')

router.get('/',getUsuarios)
router.get('/:id', getUsuario)
router.post('/create', createUsuario)
router.delete('/:id', deleteUsuario)
router.put('/update', updateUsuario)

module.exports = router