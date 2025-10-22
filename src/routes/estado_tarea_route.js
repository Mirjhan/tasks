
//estado-tarea
const express = require('express')
const router = express.Router()

const {
    getEstadoTareas,
    getEstadoTarea,
    createEstadoTarea,
    deleteEstadoTarea,
    updateEstadoTarea
} = require('../controllers/estado_tarea_controller')

router.get('/', getEstadoTareas)
router.get('/:id',getEstadoTarea)
router.post('/create', createEstadoTarea)
router.delete('/:id', deleteEstadoTarea)
router.put('/update', updateEstadoTarea)

module.exports = router