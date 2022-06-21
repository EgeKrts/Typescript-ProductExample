"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone 11", "Phone", 11500), new Product_1.Product(2, "Iphone 12", "Phone", 13500), new Product_1.Product(3, "Iphone 13", "Phone", 15500), new Product_1.Product(4, "Iphone 13 Pro Max", "Phone", 19500));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
