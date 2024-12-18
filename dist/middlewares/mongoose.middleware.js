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
exports.ensureAgeIndex = void 0;
const indexManager_1 = require("../utils/indexManager");
const ensureAgeIndex = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const age = Number(req.params.age);
        if (isNaN(age)) {
            res.status(400).json({ message: 'Invalid age parameter' });
            return;
        }
        yield (0, indexManager_1.ensureIndexCreated)();
        next();
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.ensureAgeIndex = ensureAgeIndex;
