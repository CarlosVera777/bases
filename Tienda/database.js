"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database() {
        this.pedidos = [];
        this.initConnection();
    }
    Database.prototype.initConnection = function () {
        //use credentials to connection
    };
    Database.prototype.get = function (path, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Usuario:", userId);
                console.log("------------------------------------");
                _this.pedidos.forEach(function (pedido) {
                    if (pedido.userId == userId) {
                        pedido.items.forEach(function (item) {
                            console.log("Nombre:", item.name);
                            console.log("Cantidad:", item.cant);
                            console.log("Precio:", item.price.toFixed(2));
                            console.log("------");
                        });
                    }
                });
                console.log("------------------------------------");
                resolve(true);
            }, 3000);
        });
    };
    Database.prototype.save = function (path, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.pedidos.push(data);
                resolve(true);
            }, 2000);
        });
    };
    return Database;
}());
exports.Database = Database;
