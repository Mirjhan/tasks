const express = require('express')
const router = express.Router()
const multer  = require('multer')
const upload = multer({ dest: 'public/tarea' })
const { body, validationResult, matchedData } = require('express-validator');

const {
    getTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea,
} = require('../controllers/tarea_controller');
const {
    validateExample
} = require('../validations/tarea_validations');
const { uploadFileMiddleware } = require('../utils/middlewares/upload_file_middleware');

router.get('/', getTareas)
router.get('/id/:id', getTarea)
router.post('/create', createTarea)
router.post('/createAll', uploadFileMiddleware({destination: 'tarea', nameField: 'image'}), createTarea)
router.put('/update', updateTarea)
router.delete('/delete/:id', deleteTarea)
router.post('/example', validateExample, (req, res) => res.json(req.valoresLimpios))

module.exports = router