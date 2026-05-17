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
exports.CategoriaCrudService = void 0;
const shared_1 = require("@/shared");
const application_1 = require("@categoria/application");
/**
 * Clase que encapsula la logica de negocio para operaciones CRUD.
 *
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 *
 * @class CategoriaCrudService
 * @implements ICategoriaCrudService
 * @see ICategoriaRepository Para acceder a los datos
*/
class CategoriaCrudService {
    /**
     * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio
    */
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    ;
    getCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield this.categoriaRepository.getCategorias();
            if (!categorias || categorias.length === 0) {
                throw new shared_1.NotFoundError("No se encontraron categorias");
            }
            ;
            return application_1.CategoriaMapper.toDataListDto(categorias);
        });
    }
    ;
    createCategoria(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaExists = yield this.categoriaRepository.getCategoriaNombre(data.nombreCategoria);
            if (categoriaExists)
                throw new shared_1.ConflictError("La categoria ya existe");
            const newCategoria = application_1.CategoriaMapper.fromCreateDtoToDomain(data);
            const savedCategoria = yield this.categoriaRepository.createCategoria(newCategoria);
            return application_1.CategoriaMapper.toDataDto(savedCategoria);
        });
    }
    ;
    updateCategoria(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaExists = yield this.categoriaRepository.getCategoriaId(id);
            if (!categoriaExists)
                throw new shared_1.NotFoundError("La categoria no existe");
            const categoriaWithSameName = yield this.categoriaRepository.getCategoriaNombre(dto.nombreCategoria);
            if (categoriaWithSameName && categoriaWithSameName.id !== id) {
                throw new shared_1.ConflictError("Ya existe una categoria con el mismo nombre");
            }
            ;
            const updatedCategoria = application_1.CategoriaMapper.fromUpdateDtoToDomain(dto);
            const hasNoChanges = Object.keys(updatedCategoria).every(key => {
                const typedKey = key;
                return updatedCategoria[typedKey] === categoriaExists[typedKey];
            });
            if (hasNoChanges)
                return {
                    hasChanged: false,
                    data: application_1.CategoriaMapper.toDataDto(categoriaExists)
                };
            const savedCategoria = yield this.categoriaRepository.updateCategoria(id, updatedCategoria);
            return { hasChanged: true, data: application_1.CategoriaMapper.toDataDto(savedCategoria) };
        });
    }
    ;
}
exports.CategoriaCrudService = CategoriaCrudService;
;
