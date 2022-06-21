import { Product } from "./Product";

export class SimpleDataSource {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Iphone 11", "Phone", 11500),
      new Product(2, "Iphone 12", "Phone", 13500),
      new Product(3, "Iphone 13", "Phone", 15500),
      new Product(4, "Iphone 13 Pro Max", "Phone", 19500)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
