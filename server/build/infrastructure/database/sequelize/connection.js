"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDatabase = void 0;
const infrastructure_1 = require("@/infrastructure");
const connectionDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, infrastructure_1.initializeModels)(infrastructure_1.sequelize);
        yield infrastructure_1.sequelize.authenticate();
        yield infrastructure_1.sequelize.sync();
        console.log("Conexión a la base de datos establecida correctamente");
    }
    catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);
    }
    ;
});
exports.connectionDatabase = connectionDatabase;
