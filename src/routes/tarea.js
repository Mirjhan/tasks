const express = require('express')
const router = express.Router()
const {
    getTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea,
} = require('./../controllers/tarea_controller')


router.get('/', getTareas)
router.get('/:id', getTarea)
router.post('/create', createTarea)
router.put('/update', updateTarea)
router.delete('/delete/:id', deleteTarea)


module.exports = router