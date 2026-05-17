"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = void 0;
/**
 * Envoltorio (Wrapper) de funciones `async` para controladores de express. Su proposito es
 * capturar los errores en funciones `async` y delegarlos correctamente al middleware de manejo
 * de errores `errorHandler`.
 *
 * Permite el uso de tipos personalizados para las peticiones (Request), respuestas (Response) y
 * callback (NextFunction) mediante parametros genéricos.
 *
 * @template Req Tipo de la petición (Request) por defecto
 * @template Res Tipo de la respuesta (Response) por defecto
 * @template Next Tipo de la función de callback (NextFunction) por defecto
 *
 * @param fn Función `async` del controlador que se va a envolver
 * @returns Funcion compatible con express que maneja las excepciones asíncronas
 *
 * @example
 * router.get("/categorias", asyncWrapper(async (req, res) => {
 *   const categorias = await CategoriaService.getCategorias();
 *   res.json(categorias);
 * }));
*/
const asyncWrapper = (fn) => {
    return (request, response, next) => {
        fn(request, response, next).catch(next);
    };
};
exports.asyncWrapper = asyncWrapper;
