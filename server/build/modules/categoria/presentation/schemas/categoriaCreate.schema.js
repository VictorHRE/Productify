"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaCreateSchema = void 0;
const yup_1 = require("yup");
const presentation_1 = require("@categoria/presentation");
exports.CategoriaCreateSchema = (0, yup_1.object)({
    nombreCategoria: presentation_1.CategoriaFieldSchema.nombreCategoriaField(),
    descripcionCategoria: presentation_1.CategoriaFieldSchema.descripcionCategoriaField()
});
