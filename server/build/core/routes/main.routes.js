"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const modules_1 = require("@/modules");
const router = (0, express_1.Router)();
router.use("/api/categoria", modules_1.categoriaRouter);
exports.default = router;
