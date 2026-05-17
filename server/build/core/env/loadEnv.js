"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnv = void 0;
const core_1 = require("@/core");
const loadEnv = () => {
    try {
        core_1.EnvSchema.validateSync(process.env, { abortEarly: false });
        console.log("Variables de entorno cargadas correctamente");
    }
    catch (error) {
        console.log("Error al cargar las variables de entorno", error);
        process.exit(1);
    }
};
exports.loadEnv = loadEnv;
