import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService();

let result;

result = _productService.getProducts();

let p = new Product();
p.name = "Iphone 14";
p.category = "Phone";
p.price = 30000;

_productService.saveProduct(p);

console.log(result);
