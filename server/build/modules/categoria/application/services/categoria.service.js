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
exports.CategoriaService = void 0;
const shared_1 = require("@/shared");
/**
 * Implementacion concreta del servicio de la aplicacion que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los servicios especializados.
 *
 * @class CategoriaService
 * @implements ICategoriaService
 * @see ICategoriaFinderService Para operaciones de consulta/busqueda
 * @see ICategoriaCrudService Para operaciones CRUD basicas
*/
class CategoriaService {
    /**
     * @param {ICategoriaFinderService} finder Implementacion del servicio de busqueda.
     * @param {ICategoriaCrudService} crud Implementacion del servicio Crud.
    */
    constructor(finder, crud) {
        this.finder = finder;
        this.crud = crud;
    }
    ;
    /**
     * Valida que el id de la categoria sea valido.
     *
     * @param {number} id El id de la categoria
     * @returns {void} No devuelve nada
     * @throws {ValidationError} Si el id de la categoria no es valido
    */
    validateCategoriaId(id) {
        if (!id || id < 1 || isNaN(id)) {
            throw new shared_1.ValidationError("El id de la categoria no es valido");
        }
        ;
    }
    ;
    getCategoriaId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateCategoriaId(id);
            return yield this.finder.getCategoriaId(id);
        });
    }
    ;
    getCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.crud.getCategorias();
        });
    }
    ;
    createCategoria(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.crud.createCategoria(data);
        });
    }
    ;
    updateCategoria(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateCategoriaId(id);
            return yield this.crud.updateCategoria(id, data);
        });
    }
    ;
}
exports.CategoriaService = CategoriaService;
;
