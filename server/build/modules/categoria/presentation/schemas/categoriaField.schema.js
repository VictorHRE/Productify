"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaFieldSchema = void 0;
const yup_1 = require("yup");
class CategoriaFieldSchema {
}
exports.CategoriaFieldSchema = CategoriaFieldSchema;
_a = CategoriaFieldSchema;
CategoriaFieldSchema.normalizeNombreCategoria = (value) => {
    if (typeof value !== "string" || !value.trim())
        return "";
    const normalize = value.trim().replace(/\s+/g, " ").toLowerCase();
    return normalize.charAt(0).toUpperCase() + normalize.slice(1);
};
CategoriaFieldSchema.nombreCategoriaField = () => {
    return (0, yup_1.string)()
        .required("El campo es requerido")
        .transform(value => _a.normalizeNombreCategoria(value))
        .min(3, "El campo debe tener al menos 3 caracteres")
        .max(50, "El campo debe tener 50 caracteres como máximo")
        .matches(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ ]*$/, "El nombre de la categoria solo puede contener letras y espacios");
};
CategoriaFieldSchema.descripcionCategoriaField = (isRequired = false) => {
    const schema = (0, yup_1.string)()
        .nullable()
        .transform(value => {
        if (typeof value !== "string")
            return null;
        const trimmed = value.trim();
        return trimmed.length > 0 ? trimmed.replace(/\s+/g, " ") : null;
    })
        .max(50, "El campo debe tener 50 caracteres como máximo");
    return isRequired ? schema.required("El campo es requerido").nullable() : schema.optional();
};
;
