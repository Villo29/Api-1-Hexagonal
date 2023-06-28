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
exports.CreateProductController = void 0;
//import { Product } from "../../domain/Product";
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const product = yield this.createProductUseCase.run(data.name, data.description, data.price);
                if (product)
                    //Code HTTP : 201 -> Creado
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: product === null || product === void 0 ? void 0 : product.id,
                            name: product === null || product === void 0 ? void 0 : product.name,
                            description: product === null || product === void 0 ? void 0 : product.description,
                            price: product === null || product === void 0 ? void 0 : product.price,
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                //Code HTTP : 204 Sin contenido
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateProductController = CreateProductController;
