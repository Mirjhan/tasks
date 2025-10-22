
const multer = require('multer')

const fileFilter = (req, file, cb) => {
    const extname = file.mimetype.includes('image')

    if (extname) {
        return cb(null, true)
    } else {
        cb('Error: solo imagenes!')
    }
};

const myStorage = (destination) => multer.diskStorage({
    destination: _getDestination(destination),
    filename: _getFileName,
})

const _getDestination = (destination) => {
    return (req, file, cb) => {
        cb(null, `public/${destination}/`,)
    }
}

const _getFileName = (req, file, cb) => {
    const values = file.originalname.split('.')
    const extension = values.pop()
    let filename = ''
    filename = values.pop()
    filename = filename.replaceAll(' ', '_')
    filename = filename.slice(0,50)
    const date = Date.now().toString()
    cb(null, `${filename}_${date}.${extension}`)
}



const uploadFileMiddleware = ({
    destination,
    nameField,
}) => multer({
    fileFilter: fileFilter,
    storage: myStorage(destination),
}).single(nameField)

module.exports = {
    uploadFileMiddleware
}