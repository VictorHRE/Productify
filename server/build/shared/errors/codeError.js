"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeError = void 0;
/**
 * Enum que representa los tipos de errores que pueden ocurrir en la aplicación.
*/
var CodeError;
(function (CodeError) {
    CodeError["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    CodeError["CONFLICT_ERROR"] = "CONFLICT_ERROR";
    CodeError["NOT_FOUND_ERROR"] = "NOT_FOUND_ERROR";
    CodeError["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
})(CodeError || (exports.CodeError = CodeError = {}));
;
