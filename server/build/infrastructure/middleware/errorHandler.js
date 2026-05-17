"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const shared_1 = require("@/shared");
/**
 * Middleware de manejo de errores global para Express.
 *
 * Este middleware maneja errores personalizados y cualquier otro error inesperado.
 *
 * @param {unknown} error El objeto de error que fue lanzado por la aplicación
 * @param {Request} _request Objeto de la petición (no se usa en este caso)
 * @param {Response} response Objeto de la respuesta, para enviar una respuesta al cliente
 * @param {NextFunction} _next Objeto de la siguiente función (no se usa en este caso)
 * @returns {void} No devuelve nada directamente, sino que envia una respuesta al cliente
*/
const errorHandler = (error, _request, response, _next) => {
    const { statusCode, body } = (0, shared_1.formatResponseError)(error);
    response.status(statusCode).json(body);
};
exports.errorHandler = errorHandler;
