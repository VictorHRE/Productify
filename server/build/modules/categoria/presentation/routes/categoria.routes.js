"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaBuildRouter = categoriaBuildRouter;
const express_1 = require("express");
const infrastructure_1 = require("@/infrastructure");
const shared_1 = require("@/shared");
const presentation_1 = require("@categoria/presentation");
/**
 * Construye un router de express con las rutas relacionadas a la API de Categoria.
 *
 * @param {ICategoriaController} controller Implementacion del controlador de Categoria.
 * @returns {Router} Router de express con las rutas de la API de Categoria.
*/
function categoriaBuildRouter(controller) {
    const router = (0, express_1.Router)();
    router.get("/obtener-categorias", (0, shared_1.asyncWrapper)(controller.getCategorias));
    router.get("/obtener-categoria/:id", (0, shared_1.asyncWrapper)(controller.getCategoriaId));
    router.post("/registrar-categoria", (0, infrastructure_1.validateRequest)(presentation_1.CategoriaCreateSchema), (0, shared_1.asyncWrapper)(controller.createCategoria));
    router.put("/actualizar-categoria/:id", (0, infrastructure_1.validateRequest)(shared_1.IdParamSchema, "params"), (0, infrastructure_1.validateRequest)(presentation_1.CategoriaUpdateSchema), (0, shared_1.asyncWrapper)(controller.updateCategoria));
    return router;
}
;
