"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdParamSchema = void 0;
const yup_1 = require("yup");
exports.IdParamSchema = (0, yup_1.object)({
    id: (0, yup_1.number)()
        .integer("El id debe ser un numero entero")
        .positive("El id debe ser un numero positivo")
        .typeError("El id debe ser un numero valido")
});
