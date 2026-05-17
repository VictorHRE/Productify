"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaMapper = void 0;
/**
 * Clase encargada de mapear los objetos de dominio a objetos DTO y viceversa en la capa de la aplicacion.
 *
 * Este mapper facilita la transformacion de datos entre la representacion del negocio (entidad de dominio)
 * y la representacion que expone la API (DTO).
 *
 * @class CategoriaMapper
*/
class CategoriaMapper {
    /**
     * Transforma un objeto de dominio en un objeto DTO de tipo CategoriaDto.
     *
     * @param {Categoria} domain Objeto de dominio de categoria.
     * @returns {CategoriaDto} Un objeto DTO de CategoriaDto.
    */
    static toDataDto(domain) {
        return {
            id: domain.id,
            nombre: domain.nombre,
            descripcion: domain.descripcion,
            estado: domain.estado,
            fechaCreacion: domain.createdAt,
            fechaModificacion: domain.updatedAt
        };
    }
    ;
    /**
     * Transforma un arreglo de objetos del dominio en un arreglo de objetos DTO.
     *
     * @param {Categoria[]} domain Arreglo de objetos de dominio de categoria.
     * @returns {CategoriaDto[]} Un arreglo de objetos DTO de CategoriaDto.
     * @throws {Error} Si el arreglo de dominio es nulo o undefined.
    */
    static toDataListDto(domain) {
        if (!domain)
            throw new Error("No se puede mapear un array de dominio nulo a un array de DTO");
        if (domain.length === 0)
            return [];
        return domain.map(categoria => this.toDataDto(categoria));
    }
    ;
    /**
     * Transforma un objeto de DTO de creacion en un objeto de dominio de creacion.
     *
     * @param {CategoriaCreateDto} dto Objeto recibido desde el controlador.
     * @returns {CategoriaCreate} Un objeto del dominio CategoriaCreate.
     * @throws {Error} Si el objeto DTO es nulo o undefined.
    */
    static fromCreateDtoToDomain(dto) {
        if (!dto)
            throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");
        return {
            nombre: dto.nombreCategoria,
            descripcion: dto.descripcionCategoria
        };
    }
    ;
    /**
     * Transforma un objeto de DTO de actualizacion en un objeto de dominio de actualizacion.
     *
     * @param {CategoriaUpdateDto} dto Objeto recibido desde el controlador.
     * @returns {CategoriaUpdate} Un objeto del dominio CategoriaUpdate.
     * @throws {Error} Si el objeto DTO es nulo o undefined.
    */
    static fromUpdateDtoToDomain(dto) {
        if (!dto)
            throw new Error("No se puede mapear un objeto DTO nulo a un objeto de dominio");
        return {
            nombre: dto.nombreCategoria,
            descripcion: dto.descripcionCategoria,
            estado: dto.estadoCategoria
        };
    }
    ;
}
exports.CategoriaMapper = CategoriaMapper;
;
