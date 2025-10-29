
const { Sequelize } = require('sequelize');
const {
    HOST,
    DATABASE,
    USER,
    PASSWORD,
} = process.env

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
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