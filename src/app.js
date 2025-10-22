const tareaRouter = require('./routes/tarea_route')
const usuarioRouter = require('./routes/usuario_route')
const estadoTareaRouter = require('./routes/estado_tarea_route')
const authRouter =require('./routes/auth_route')
const express = require('express')
const morgan = require('morgan')
const { authenticate } = require('./models/connection')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/tarea', tareaRouter)
app.use('/usuario', usuarioRouter)
app.use('/estado-tarea', estadoTareaRouter)
app.use('/auth', authRouter)

app.listen(port, () => {                            
    console.log(`Example app listening on port ${port}`)
    authenticate()
})
