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
exports.serverStart = void 0;
const core_1 = require("@/core");
const infrastructure_1 = require("@/infrastructure");
const serverStart = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, core_1.loadEnv)();
        yield (0, infrastructure_1.connectionDatabase)();
        const app = (0, core_1.createApp)();
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
        });
    }
    catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
});
exports.serverStart = serverStart;
