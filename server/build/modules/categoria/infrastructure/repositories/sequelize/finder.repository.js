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
exports.CategoriaFinderRepositorySequelize = void 0;
const shared_1 = require("@/shared");
const infrastructure_1 = require("@categoria/infrastructure");
/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones de consulta y busqueda
 * sobre la tabla categorias.
 *
 * Utiliza la ORM Sequelize para realizar las consultas.
 *
 * Mapea los resultados de la consulta a un objeto de dominio de categoria.
 *
 * @class CategoriaFinderRepository
 * @implements ICategoriaFinderRepository
*/
class CategoriaFinderRepository {
    getCategoriaId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaModel = yield infrastructure_1.CategoriaSequelize.findByPk(id);
                return categoriaModel ? infrastructure_1.CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
            }
            catch (error) {
                throw new shared_1.ServerError("Error al obtener la categoria");
            }
        });
    }
    ;
    getCategoriaNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaModel = yield infrastructure_1.CategoriaSequelize.findOne({
                    where: { nombre_categoria: nombre }
                });
                return categoriaModel ? infrastructure_1.CategoriaPersistenceMapper.toDomain(categoriaModel) : null;
            }
            catch (error) {
                throw new shared_1.ServerError("Error al obtener el nombre de la categoria");
            }
        });
    }
    ;
}
exports.CategoriaFinderRepositorySequelize = CategoriaFinderRepository;
;
