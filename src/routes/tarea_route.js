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

router.get('/', getTareas)
router.get('/id/:id', getTarea)
router.post('/create', createTarea)
router.post('/createAll',upload.single('image'), createTarea)
router.put('/update', updateTarea)
router.delete('/delete/:id', deleteTarea)
router.post('/example', validateExample, (req, res) => res.json(req.valoresLimpios))


/* router.post('/example',
    body('email').optional().trim().isEmail(),
    body(['edad', 'tiempo_servicio']).isNumeric(),
    body('nombre').isString().trim().isLength({ min: 2, max: 50 }),
    body('password').isLength({ min: 5 }),
    body('passwordConfirmation').custom((value, { req }) => {
        return value === req.body.password;
    }).withMessage('Contraseñas no coinciden'),
    (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(522).json(result.array())
        }

        const data = matchedData(req)

        return res.json(data);
    });*/



module.exports = router