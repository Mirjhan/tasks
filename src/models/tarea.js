const {
    sequelize
} = require('./connection')
const { DataTypes, Model } = require('sequelize');

class Tarea extends Model {}

// NOMBRE, DESCRIPCION, ID_ESTADO, ID_USUARIO

Tarea.init(
  {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Tarea',
    paranoid: true,
  },
);

const sync = async ()=> {
    await Tarea.sync({ force: false });
}

sync()

module.exports = Tarea