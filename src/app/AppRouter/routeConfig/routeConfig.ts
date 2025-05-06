class RouteConfig {
  #index = '/';
  #basket = 'basket';
  #product = 'product/:id';
  #notFound = '*';

  get Index() {
    return this.#index;
  }

  get Basket() {
    return this.#basket;
  }

  get Product() {
    return this.#product;
  }

  get NotFound() {
    return this.#notFound;
  }
}

export const routeConfig = new RouteConfig();
