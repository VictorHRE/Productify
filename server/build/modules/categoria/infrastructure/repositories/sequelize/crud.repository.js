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
exports.CategoriaCrudRepositorySequelize = void 0;
const shared_1 = require("@/shared");
const infrastructure_1 = require("@categoria/infrastructure");
/**
 * Esta clase encapsula la logica de acceso a datos para realizar operaciones CRUD
 * sobre la tabla categorias.
 *
 * Utiliza la ORM Sequelize para realizar las consultas.
 *
 * Mapea los resultados de la consulta a un objeto de dominio de categoria.
 *
 * @class CategoriaCrudRepository
 * @implements ICategoriaCrudRepository
*/
class CategoriaCrudRepository {
    getCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield infrastructure_1.CategoriaSequelize.findAll();
                return infrastructure_1.CategoriaPersistenceMapper.toDomainList(categorias);
            }
            catch (error) {
                throw new shared_1.ServerError("Error al obtener las categorias");
            }
        });
    }
    ;
    createCategoria(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaModel = infrastructure_1.CategoriaPersistenceMapper.toPersistenceFromCreate(data);
                const categoria = yield infrastructure_1.CategoriaSequelize.create(categoriaModel);
                return infrastructure_1.CategoriaPersistenceMapper.toDomain(categoria);
            }
            catch (error) {
                throw new shared_1.ServerError("Error al crear la categoria");
            }
        });
    }
    ;
    updateCategoria(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaModel = infrastructure_1.CategoriaPersistenceMapper.toPersistenceFromUpdate(data);
                yield infrastructure_1.CategoriaSequelize.update(categoriaModel, {
                    where: { id_categoria: id }
                });
                const categoria = yield infrastructure_1.CategoriaSequelize.findByPk(id);
                if (!categoria)
                    throw new shared_1.ServerError("No se pudo recuperar la categoria tras la actualización");
                return infrastructure_1.CategoriaPersistenceMapper.toDomain(categoria);
            }
            catch (error) {
                throw new shared_1.ServerError("Error al actualizar la categoria");
            }
        });
    }
    ;
}
exports.CategoriaCrudRepositorySequelize = CategoriaCrudRepository;
;
