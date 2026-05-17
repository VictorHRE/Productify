"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = void 0;
const shared_1 = require("@/shared");
;
;
/**
 * Clase que encapsula la funcionalidad para enviar una respuesta de éxito.
 *
 * @class ResponseSuccess
 * @implements IResponseSuccess
*/
class ResponseSuccess {
    /**
     * Crea una instancia de ResponseSuccess.
     *
     * @param {Request} request El objeto de solicitud HTTP
     * @param {Response} response El objeto de respuesta HTTP
    */
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    ;
    /**
     * Construye la estructura base de una respuesta de éxito.
     *
     * @param {T} data Datos a retornar en la respuesta
     * @param {string} message Mensaje descriptivo de la operación realizada
     * @returns {IBaseResponseSuccess<T>} Objeto de respuesta formateada
    */
    buildBaseResponseSuccess(data, message) {
        return {
            success: true,
            message,
            data,
            timestamp: new Date().toISOString(),
            path: this.request.path,
            method: this.request.method
        };
    }
    ;
    /**
     * Envía una respuesta generica de éxito (200 por defecto).
     *
     * @param {T} data Datos a retornar en la respuesta
     * @param {string} message Mensaje descriptivo de la operación realizada (default: "Operacion realizada con exito")
     * @param {HttpStatusCode} statusCode Codigo de estado HTTP (default: 200)
    */
    sendSuccess(data, message = "Operacion realizada con exito", statusCode = shared_1.HttpStatusCode.OK) {
        return this.response.status(statusCode).json(this.buildBaseResponseSuccess(data, message));
    }
    ;
    /**
     * Envia una respuesta de creacion exitosa (201 Created).
     *
     * @param {T} data Datos a retornar en la respuesta
     * @param {string} message Mensaje descriptivo de la operación realizada (default: "Recurso creado correctamente")
    */
    sendCreated(data, message = "Recurso creado correctamente") {
        return this.response.status(shared_1.HttpStatusCode.CREATED).json(this.buildBaseResponseSuccess(data, message));
    }
    ;
    /**
     * Envia una respuesta de actualización exitosa (200 OK).
     *
     * @param {T} data Datos a retornar en la respuesta
     * @param {string} message Mensaje descriptivo de la operación realizada (default: "Recurso actualizado correctamente")
    */
    sendUpdated(data, message = "Recurso actualizado correctamente") {
        return this.response.status(shared_1.HttpStatusCode.OK).json(this.buildBaseResponseSuccess(data, message));
    }
    ;
    /**
     * Envia una respuesta indicando que no cambios (200 OK).
     *
     * @param {T} data Datos a retornar en la respuesta
     * @param {string} message Mensaje descriptivo de la operación realizada (default: "No se realizaron cambios, los datos son iguales")
    */
    sendNoChanges(data, message = "No se realizaron cambios, los datos son iguales") {
        return this.response.status(shared_1.HttpStatusCode.OK).json(this.buildBaseResponseSuccess(data, message));
    }
    ;
}
exports.ResponseSuccess = ResponseSuccess;
;
