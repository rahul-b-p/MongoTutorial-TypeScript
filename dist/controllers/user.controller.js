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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.readUser = exports.createUser = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const console_1 = require("console");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, age } = req.body;
        const existingUser = yield users_model_1.default.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: 'User Already Exist' });
            return;
        }
        const newUser = new users_model_1.default({
            username, email, age
        });
        yield newUser.save();
        res.json({ message: 'New user added', data: newUser });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createUser = createUser;
const readUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield users_model_1.default.find();
        res.json({ message: 'Fetched all users', data: allUsers });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.readUser = readUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        (0, console_1.log)(id);
        const { username, email, age } = req.body;
        const updatedUser = yield users_model_1.default.findByIdAndUpdate({ _id: id }, { email, username, age });
        yield (updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.save());
        res.json({ message: 'Updated Successful', data: updatedUser });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield users_model_1.default.findByIdAndDelete({ _id: id });
        res.json({ message: 'Deleted Successful', data: deletedUser });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteUser = deleteUser;
