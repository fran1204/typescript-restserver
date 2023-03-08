import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'demos', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
}); //nombre_bd, nombre_usuario, pass, objecto_configuracion

export default db;