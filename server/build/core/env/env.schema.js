"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvSchema = void 0;
const yup_1 = require("yup");
exports.EnvSchema = (0, yup_1.object)({
    SERVER_HOST: (0, yup_1.string)().required(),
    SERVER_PORT: (0, yup_1.number)().required(),
    DB_USUARIO: (0, yup_1.string)().required(),
    DB_PASSWORD: (0, yup_1.string)().required(),
    DB_DATABASE: (0, yup_1.string)().required(),
    CLIENT_PORT: (0, yup_1.string)().required(),
});
