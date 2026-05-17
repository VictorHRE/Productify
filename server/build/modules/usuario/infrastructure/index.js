"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSequelize = void 0;
var usuario_model_1 = require("./database/sequelize/usuario.model");
Object.defineProperty(exports, "UsuarioSequelize", { enumerable: true, get: function () { return __importDefault(usuario_model_1).default; } });
