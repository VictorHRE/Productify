"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeModels = void 0;
const infrastructure_1 = require("@/modules/categoria/infrastructure");
const infrastructure_2 = require("@/modules/usuario/infrastructure");
/**
 * Inicializa los modelos de Sequelize con la instancia de la configuración de Sequelize.
 * Debe llamarse antes de definir asociaciones o sincronizar.
 *
 * @param {Sequelize} sequelize Instancia de Sequelize
*/
const initializeModels = (sequelize) => {
    infrastructure_1.CategoriaSequelize.initialize(sequelize);
    infrastructure_2.UsuarioSequelize.initialize(sequelize);
};
exports.initializeModels = initializeModels;
