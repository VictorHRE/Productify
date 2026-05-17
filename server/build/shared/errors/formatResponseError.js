"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseError = formatResponseError;
const yup_1 = require("yup");
const shared_1 = require("@/shared");
/**
 * Construye la estructura base de una respuesta de error.
 *
 * @param {HttpStatusCode} statusCode Codigo de estado HTTP.
 * @param {CodeError} code Codigo de error.
 * @param {string} message Mensaje de error.
 * @param {FieldError[]} details Detalles del error (opcional).
 * @returns {ErrorResponse} Objeto de respuesta de error HTTP.
*/
function buildBaseResponseError(statusCode, code, message, details) {
    return {
        statusCode,
        body: {
            success: false,
            error: {
                code,
                message,
                details
            }
        }
    };
}
;
/**
 * Formatea un error en una respuesta estándar para la API.
 *
 * Determina el tipo de error y construye una respuesta con código HTTP, código interno
 * y mensajes adecuados.
 *
 * @param {unknown} error El objeto de error capturado.
 * @returns {ErrorResponse} Un objeto con codigo de estado (statusCode) y cuerpo de respuesta (body).
*/
function formatResponseError(error) {
    if (error instanceof shared_1.AppError) {
        const message = error instanceof shared_1.ServerError
            ? "Ha ocurrido un error interno del servidor. Por favor, intente nuevamente más tarde."
            : error.message;
        return buildBaseResponseError(error.statusCode, error.code, message);
    }
    ;
    if (error instanceof yup_1.ValidationError) {
        return buildBaseResponseError(shared_1.HttpStatusCode.BAD_REQUEST, shared_1.CodeError.VALIDATION_ERROR, "Los datos enviados no son válidos", (0, shared_1.formatYupErrors)(error));
    }
    ;
    return buildBaseResponseError(shared_1.HttpStatusCode.INTERNAL_SERVER_ERROR, shared_1.CodeError.INTERNAL_SERVER_ERROR, "Ocurrio un error inesperado. Intente nuevamente más tarde.");
}
;
