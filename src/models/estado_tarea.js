const { sequelize } = require('./connection')
const { DataTypes, Model} = require('sequelize')

class EstadoTarea extends Model {}

EstadoTarea.init(
{
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
},
{
    sequelize,
    modelName: 'EstadoTarea',
}
)

const sync =  async() => {
    await EstadoTarea.sync({force: false})
}
sync()

module.exports = EstadoTarea
