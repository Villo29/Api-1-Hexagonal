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
exports.MysqlProductRepository = void 0;
const mysql_1 = require("../../database/mysql");
const Product_1 = require("../domain/Product");
class MysqlProductRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM product";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));
                return dataProducts.map((product) => new Product_1.Product(product.id, product.name, product.description, product.price));
            }
            catch (error) {
                return null;
            }
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM product WHERE id=?";
            const params = [userId];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Product_1.Product(result[0].id, result[0].name, result[0].description, result[0].price);
            }
            catch (error) {
                return null;
            }
        });
    }
    createProduct(name, description, price) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO product (name, description, price) VALUES (?, ?, ?)";
            const params = [name, description, price];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                //El objeto Result es un objeto que contiene info generada de la bd
                /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
                      estar dentro de un bloque try/catch si hay error se captura en el catch */
                return new Product_1.Product(result.insertId, name, description, price);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlProductRepository = MysqlProductRepository;
