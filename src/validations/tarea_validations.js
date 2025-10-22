
const { body, matchedData, checkSchema } = require('express-validator');

checkSchema({
  nombre: {
    errorMessage: 'Invalid nombre',
    isString: true,
    optional: false,
    isLength: {
        options: {max: 50},
        errorMessage: 'Revise la dimension del nombre'
    }
  },
  description: {
    errorMessage: 'Invalid nombre',
    isString: true,
    optional: false,
    isLength: {
        options: {max: 50},
        errorMessage: 'Revise la dimension del nombre'
    }
  },
});


const validateExample = async (req, res, next) => {
    const validations = [
        body('email').optional().trim().isEmail(),
        body(['edad', 'tiempo_servicio']).isNumeric(),
        body('nombre').isString().trim().isLength({ min: 2, max: 50 }),
        body('password').isLength({ min: 5 }),
        body('passwordConfirmation').custom((value, { req }) => {
            return value === req.body.password;
        }).withMessage('Contraseñas no coinciden')
    ]

    for (const validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
    }


    req.valoresLimpios = matchedData(req)
    next();
}


/* const ejemploDeMiddleware = (req, res, continuar) => {
    const { id } = req.params
    if (isNaN(id) ) {
        return res.status(500).json('Id debe ser numerico')
    }
    continuar()
}*/

module.exports = {
    validateExample,
}