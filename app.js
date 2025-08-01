const tareaRouter = require('./src/routes/tarea')
const usuarioRouter = require('./src/routes/usuario')
const estadoTareaRouter = require('./src/routes/estado_tarea')
const express = require('express')
const morgan = require('morgan')
const { authenticate } = require('./src/models/connection')
const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use('/tarea', tareaRouter)
app.use('/usuario', usuarioRouter)
app.use('/estado-tarea', estadoTareaRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    authenticate()
})
