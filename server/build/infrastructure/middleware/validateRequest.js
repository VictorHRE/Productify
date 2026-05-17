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
exports.validateRequest = void 0;
/**
 * Middleware para validar los datos de las solicitudes HTTP.
 *
 * Valida los datos de la parte especificada del request (params, query o body) utilizando el esquema de validacion proporcionado.
 * Normaliza los datos de la parte especificada y los agrega al objeto `request` específico.
 *
 * Si los datos no son validos, se lanza un error que es manejado por el middleware de error `errorHandler`.
 *
 * @template T Tipo de objeto que se desea validar
 * @param {SchemaType<T>} schema Esquema de validacion para los datos
 * @param {RequestPart} requestPart Parte del request que se desea validar (body por defecto)
 * @example
 * // validacion de body
 * router.post("/categoria", validateRequest(categoriaSchema), controlador);
 *
 * // validacion de params
 * router.get("/categoria/:id", validateRequest(idParamSchema, "params"), controlador);
 *
 * // validacion de query
 * router.get("/categoria", validateRequest(querySchema, "query"), controlador);
*/
const validateRequest = (schema, requestPart = "body") => (request, _response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield schema.validate(request[requestPart], {
            abortEarly: false,
            stripUnknown: true,
        });
        request[requestPart] = result;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.validateRequest = validateRequest;
