"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaSequelize = void 0;
const sequelize_1 = require("sequelize");
/**
 * Modelo sequelize que representa la tabla `categorias` en la base de datos.
 *
 * Este modelo define la estrutura de la tabla, sus campos y restricciones.
 *
 * @class CategoriaSequelize
 * @extends Model
 * @implements ICategoriaDb
*/
class CategoriaSequelize extends sequelize_1.Model {
    /**
     * Inicializa el modelo en sequelize y define la estructura de la tabla `categorias`.
     *
     * @param {Sequelize} sequelize Instancia de sequelize
    */
    static initialize(sequelize) {
        CategoriaSequelize.init({
            id_categoria: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nombre_categoria: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            descripcion_categoria: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true,
            },
            estado_categoria: {
                type: sequelize_1.DataTypes.ENUM("activo", "inactivo"),
                allowNull: false,
                defaultValue: "activo"
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
            }
        }, {
            sequelize,
            modelName: "Categoria",
            tableName: "categorias",
            timestamps: true
        });
    }
    ;
}
exports.CategoriaSequelize = CategoriaSequelize;
;
