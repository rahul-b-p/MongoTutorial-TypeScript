"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const console_1 = require("console");
const connection_1 = __importDefault(require("./database/connection"));
const routers_1 = require("./routers");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
(0, connection_1.default)();
app.use('/create', routers_1.createRouter);
app.use('/read', routers_1.readRouter);
app.use('/update', routers_1.updateRouter);
app.use('/delete', routers_1.deleteRouter);
app.listen(port, () => {
    (0, console_1.log)(`Server Runing at http://localhost:${port}`);
});
