"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'demos', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
}); //nombre_bd, nombre_usuario, pass, objecto_configuracion
exports.default = db;
//# sourceMappingURL=connection.js.map