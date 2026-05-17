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
exports.CategoriaRepository = void 0;
/**
 * Implementacion concreta del repositorio de la tabla categorias que actua como fachada para las
 * operaciones de busqueda y CRUD, delegando a los repositorios especializados.
 *
 * @class CategoriaRepository
 * @implements ICategoriaRepository
 * @see ICategoriaFinderRepository Para operaciones de consulta/busqueda
 * @see ICategoriaCrudRepository Para operaciones CRUD basicas
*/
class CategoriaRepository {
    /**
     * @param {ICategoriaFinderRepository} finder Implementacion del repositorio de busqueda
     * @param {ICategoriaCrudRepository} crud Implementacion del repositorio Crud
    */
    constructor(finder, crud) {
        this.finder = finder;
        this.crud = crud;
    }
    ;
    getCategoriaId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.finder.getCategoriaId(id);
        });
    }
    ;
    getCategoriaNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.finder.getCategoriaNombre(nombre);
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
            return yield this.crud.updateCategoria(id, data);
        });
    }
    ;
}
exports.CategoriaRepository = CategoriaRepository;
;
