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
exports.CategoriaController = void 0;
const shared_1 = require("@/shared");
/**
 * Clase que representa el controlador de la aplicación para la gestión de las categorías.
 *
 * Se comunica con la capa del servicio para acceder a los metodos y responder con la información
 * solicitada.
 *
 * @class CategoriaController
 * @implements ICategoriaController
 * @see ICategoriaService Para operaciones de consulta/busqueda y CRUD
*/
class CategoriaController {
    /**
     * @param {ICategoriaService} categoriaService Implementacion del servicio de categorias
    */
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
        this.getCategorias = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const categorias = yield this.categoriaService.getCategorias();
            const responseHandler = new shared_1.ResponseSuccess(request, response);
            responseHandler.sendSuccess(categorias, "Lista de categorias obtenida correctamente");
        });
        this.getCategoriaId = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const categoria = yield this.categoriaService.getCategoriaId(Number(request.params.id));
            const responseHandler = new shared_1.ResponseSuccess(request, response);
            responseHandler.sendSuccess(categoria, "Categoría obtenida correctamente");
        });
        this.createCategoria = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const categoria = yield this.categoriaService.createCategoria(request.body);
            const responseHandler = new shared_1.ResponseSuccess(request, response);
            responseHandler.sendCreated(categoria, "Categoría creada correctamente");
        });
        this.updateCategoria = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const { data, hasChanged } = yield this.categoriaService.updateCategoria(Number(request.params.id), request.body);
            const responseHandler = new shared_1.ResponseSuccess(request, response);
            if (!hasChanged) {
                responseHandler.sendNoChanges(data);
                return;
            }
            ;
            responseHandler.sendUpdated(data, "Categoría actualizada correctamente");
        });
    }
    ;
}
exports.CategoriaController = CategoriaController;
;
