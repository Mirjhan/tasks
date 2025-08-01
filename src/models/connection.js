
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const closeConnection = async () => {
    try {
        await sequelize.close()
        console.log('Conexion cerrada.')
    } catch (error) {
        console.log('No se pudo cerrar la conexion: ' + error)
    }
}

module.exports = {
    sequelize,
    authenticate,
    closeConnection,
}