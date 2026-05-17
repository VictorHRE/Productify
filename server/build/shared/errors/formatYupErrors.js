"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupErrors = void 0;
/**
 * Formatea los errores de validación de yup en un arreglo de objetos devolviendo
 * solo el primer error por cada campo.
 *
 * @param {ValidationError} error Error de validacion de yup
 * @returns {FieldError[]} Arreglo de objetos con los campos y mensajes de error
*/
const formatYupErrors = (error) => {
    if (error.inner && error.inner.length > 0) {
        const uniqueErrors = {};
        error.inner.forEach((err) => {
            if (err.path)
                uniqueErrors[err.path] = err.message;
        });
        return Object.entries(uniqueErrors).map(([field, message]) => ({
            field,
            message
        }));
    }
    ;
    if (error.errors && error.errors.length > 0) {
        return [{ field: error.path || "unknown", message: error.errors[0] }];
    }
    ;
    return [{
            field: error.path || "unknown",
            message: "La validacion fallo por algun error desconocido"
        }];
};
exports.formatYupErrors = formatYupErrors;
