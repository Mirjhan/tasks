const { defaultUsers } = require('../utils/default_values')
const { sequelize } = require('./connection')
const { DataTypes, Model } = require('sequelize')
class Usuario extends Model { }

Usuario.init({
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: 'default.jpg',
    },
}, {
    sequelize,
    modelName: 'Usuario',
    paranoid: true,
})

const sync = async () => await Usuario.sync({ force: false })
    .then(setDefaultValues)

const setDefaultValues = async () => {
    const count = await Usuario.count()
    if (count == 0) await Usuario.bulkCreate(defaultUsers)
}

sync()

module.exports = Usuario