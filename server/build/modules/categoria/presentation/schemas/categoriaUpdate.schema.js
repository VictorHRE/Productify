"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaUpdateSchema = void 0;
const yup_1 = require("yup");
const presentation_1 = require("@categoria/presentation");
exports.CategoriaUpdateSchema = (0, yup_1.object)({
    nombreCategoria: presentation_1.CategoriaFieldSchema.nombreCategoriaField(),
    descripcionCategoria: presentation_1.CategoriaFieldSchema.descripcionCategoriaField(true),
    estadoCategoria: (0, yup_1.string)()
        .required("El estado es requerido")
        .oneOf(["activo", "inactivo"], "El estado debe ser activo o inactivo")
});
