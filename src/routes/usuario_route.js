const express = require('express')
const router = express.Router()
const multer = require('multer')

const fileFilter = (req, file, cb) => {
    const extname = file.mimetype.includes('image')

    if (extname) {
        return cb(null, true)
    } else {
        cb('Error: solo imagenes!')
    }
};

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/users/',)
    },
    filename: (req, file, cb) => {
        console.log(file)
        const values = file.originalname.split('.')
        const extension = values.pop()
        const filename = values.pop()
        const date = Date.now().toString()
        cb(null, `${filename}_${date}.${extension}`)
    }
})


const upload = multer({
    fileFilter: fileFilter,
    storage: myStorage,
})
    .single('avatar')

const {
    getUsuarios,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    updateAvatar,
} = require('../controllers/usuario_controller')

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/create', createUsuario)
router.delete('/:id', deleteUsuario)
router.put('/update', updateUsuario)
router.put('/updateImage', upload, updateAvatar)


/* router.put('/updateImage',

    (req, res, next) => {
        upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                res.status(404).send(err + 'Upload failed due to multer error');
            } else if (err) {
                res.status(404).send(err + 'Upload failed due to unknown error');
            }
            next()
        })
    }

    , updateAvatar) */

module.exports = router