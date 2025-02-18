"use strict";
//EJEMPLO:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var interaction_1 = require("./interaction");
// class -> base datos
// class -> interaccion con el usuario
// class -> store -> con un metodo para hacer un pedido
var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
        this.db = new database_1.Database();
        this.interaction = new interaction_1.Interaction();
    }
    StoreComponent.prototype.getPedidos = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.interaction.showAlert("solicitando pedidos del usurio:" + userId);
                        return [4 /*yield*/, this.db.get("Pedidos", userId)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.interaction.showAlert("Pedidos impresos con exito!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreComponent.prototype.savePedido = function (pedido) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.interaction.showAlert("Enviando tu pedido...");
                        return [4 /*yield*/, this.db.save("Pedidos", pedido)];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.interaction.showAlert("Pedido enviado con exito!");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return StoreComponent;
}());
function action() {
    return __awaiter(this, void 0, void 0, function () {
        var store, pedido1, pedido2, pedido3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store = new StoreComponent();
                    pedido1 = { userId: 1, name: "Carlos", items: [{ name: "Pizza Hat Familiar", cant: 1, price: 45 }] };
                    pedido2 = { userId: 1, name: "Carlos", items: [{ name: "Pepsi 2L", cant: 1, price: 8 }] };
                    pedido3 = { userId: 2, name: "Andrea", items: [{ name: "Pollo a la brasa", cant: 1, price: 70 }] };
                    return [4 /*yield*/, store.savePedido(pedido1)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, store.savePedido(pedido2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, store.savePedido(pedido3)];
                case 3:
                    _a.sent();
                    console.log("PEDIDOS SOLICITADOS:");
                    return [4 /*yield*/, store.getPedidos(1)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
action();
//DESAFIO:
//♦ En models:
//  •  Agregar el campo userId: number
//• En Clases:
//  • Cuando guardamos el pedido debemos ingresar el userId
//     const pedido1: IPedido = {userId: 1, name: "Juan", items: [{name: "pizza", cant: 1, price: 10}]};
//     store.savePedido(pedido1);
//♦ En Database:
//  • Crear una variable pedidos de tipo IPedido[] 
//    donde guardaremos los pedidos.
//♦ En StoreComponent:
//  • Implementar el metodo async getPedidos(userId:string)
//    suponer que dura en leer de la BD 3 segundos
//    este imprime cada uno de los pedidos del 
//    usuario cuyo id = userId.
//NECESARIO SABER:
// tipado
// variables - metodos - funciones
// condicionales
// bucles
// arrays - funciones flecha
// variables de tipo objeto
// async - await - promesas
// clases
