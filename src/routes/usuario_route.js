const express = require('express')
const router = express.Router()

const {
    getUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    updateAvatar,
} = require('../controllers/usuario_controller')
const { uploadFileMiddleware } = require('../utils/middlewares/upload_file_middleware')

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/create', createUsuario)
router.delete('/:id', deleteUsuario)
router.put('/update', updateUsuario)
router.put('/updateImage', uploadFileMiddleware({destination: 'tarea', nameField: 'avatar'}), updateAvatar)

module.exports = router