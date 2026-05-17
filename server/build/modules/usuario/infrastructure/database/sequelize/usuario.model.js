"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * Modelo sequelize que representa la tabla `usuarios` en la base de datos.
 *
 * Este modelo define la estructura de la tabla, sus campos y restricciones.
 *
 * @class UsuarioSequelize
 * @extends Model
 * @implements IUsuarioDb
*/
class UsuarioSequelize extends sequelize_1.Model {
    /**
     * Inicializa el modelo en sequelize y define la estructura de la tabla `usuarios`.
     *
     * @param sequelize Instancia de sequelize
    */
    static initialize(sequelize) {
        UsuarioSequelize.init({
            id_usuario: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nombre_usuario: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: false,
            },
            apellidos_usuario: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: false,
            },
            sexo_usuario: {
                type: sequelize_1.DataTypes.ENUM("M", "F"),
                allowNull: false,
            },
            cedula_usuario: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false,
                unique: true,
                validate: {
                    len: [16, 16],
                },
            },
            departamento_usuario: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true,
            },
            direccion_usuario: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true,
            },
            correo_usuario: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            contra_usuario: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    len: [8, 100],
                },
            },
            estado_usuario: {
                type: sequelize_1.DataTypes.ENUM("activo", "inactivo"),
                allowNull: false,
                defaultValue: "activo",
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
            modelName: "Usuario",
            tableName: "usuarios",
            timestamps: true
        });
    }
    ;
}
;
exports.default = UsuarioSequelize;
