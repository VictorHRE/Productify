"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFoundError = exports.ConflictError = exports.ValidationError = exports.AppError = void 0;
const shared_1 = require("@/shared");
;
/**
 * Clase base para todos los errores personalizados.
 *
 * @class AppError
 * @extends Error
 * @implements AppErrorAttributes
*/
class AppError extends Error {
    /**
     * Crea una nueva instancia de AppError
     *
     * @param {CodeError} code Codigo del error
     * @param {HttpStatusCode} statusCode Codigo de estado del error
     * @param {string} message Mensaje del error
    */
    constructor(code, statusCode, message) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
;
/**
 * Error utilizado para representar errores de validación de datos.
 *
 * @class ValidationError
 * @extends AppError
*/
class ValidationError extends AppError {
    /**
     * @param {string} message Mensaje del error (por defecto `Error de validación de datos`)
     * @param {FieldError[]} details Detalles del error (opcional)
    */
    constructor(message = "Error de validación de datos", details) {
        super(shared_1.CodeError.VALIDATION_ERROR, shared_1.HttpStatusCode.BAD_REQUEST, message);
        this.details = details;
    }
}
exports.ValidationError = ValidationError;
;
/**
 * Error utilizado cuando ya se encuentra un recurso con el mismo identificador.
 *
 * @class ConflictError
 * @extends AppError
*/
class ConflictError extends AppError {
    /**
     * @param {string} message Mensaje del error (por defecto `El recurso ya existe`)
    */
    constructor(message = "El recurso ya existe") {
        super(shared_1.CodeError.CONFLICT_ERROR, shared_1.HttpStatusCode.CONFLICT, message);
    }
}
exports.ConflictError = ConflictError;
;
/**
 * Error utilizado cuando no se encuentra el recurso solicitado.
 *
 * @class NotFoundError
 * @extends AppError
*/
class NotFoundError extends AppError {
    /**
     * @param {string} message Mensaje del error (por defecto `No se encontro el recurso solicitado`)
    */
    constructor(message = "No se encontro el recurso solicitado") {
        super(shared_1.CodeError.NOT_FOUND_ERROR, shared_1.HttpStatusCode.NOT_FOUND, message);
    }
}
exports.NotFoundError = NotFoundError;
;
/**
 * Error utilizado para representar errores internos del servidor.
 *
 * @class ServerError
 * @extends AppError
*/
class ServerError extends AppError {
    /**
     * @param {string} message Mensaje del error (por defecto `Error interno del servidor`)
    */
    constructor(message = "Error interno del servidor") {
        super(shared_1.CodeError.INTERNAL_SERVER_ERROR, shared_1.HttpStatusCode.INTERNAL_SERVER_ERROR, message);
    }
}
exports.ServerError = ServerError;
;
