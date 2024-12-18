"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
exports.router.get('/user', controllers_1.readUser);
exports.router.get('/user/:age', middlewares_1.ensureAgeIndex, controllers_1.readUserByAge);
