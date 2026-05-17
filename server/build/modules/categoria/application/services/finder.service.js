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
exports.CategoriaFinderService = void 0;
const shared_1 = require("@/shared");
const application_1 = require("@categoria/application");
/**
 * Clase que encapsula la logica de negocio para operaciones de busqueda.
 *
 * Se comunica con la capa de repositorio para acceder a los datos y se encarga de transformar los datos
 * en DTOs para ser consumidos por el controlador.
 *
 * @class CategoriaFinderService
 * @implements ICategoriaFinderService
 * @see ICategoriaRepository Para acceder a los datos
*/
class CategoriaFinderService {
    /**
     * @param {ICategoriaRepository} categoriaRepository Implementacion del repositorio
    */
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    ;
    getCategoriaId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield this.categoriaRepository.getCategoriaId(id);
            if (!categoria)
                throw new shared_1.NotFoundError("No se encontro la categoria");
            return application_1.CategoriaMapper.toDataDto(categoria);
        });
    }
    ;
}
exports.CategoriaFinderService = CategoriaFinderService;
;
