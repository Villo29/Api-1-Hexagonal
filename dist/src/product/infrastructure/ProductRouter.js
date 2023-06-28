"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const dependencies_2 = require("./dependencies");
const dependencies_3 = require("./dependencies");
exports.productRouter = express_1.default.Router();
exports.productRouter.get("/", dependencies_2.getAllProductController.run.bind(dependencies_2.getAllProductController));
exports.productRouter.get("/:id", dependencies_3.getByIdProductController.run.bind(dependencies_3.getByIdProductController));
exports.productRouter.post("/", dependencies_1.createProductController.run.bind(dependencies_1.createProductController));
