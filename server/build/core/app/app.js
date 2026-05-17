"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const core_1 = require("@/core");
const infrastructure_1 = require("@/infrastructure");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)(core_1.customCorsOptions));
    app.use((0, morgan_1.default)("dev"));
    app.use(express_1.default.json());
    app.use(core_1.mainRouter);
    app.use(infrastructure_1.errorHandler);
    return app;
};
exports.createApp = createApp;
