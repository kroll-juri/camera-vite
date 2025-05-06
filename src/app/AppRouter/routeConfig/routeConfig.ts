class RouteConfig {
  #index = '/';
  #basket = '/basket';
  #camera = '/camera';
  #product = '/camera/:id';
  #notFound = '*';

  get Index() {
    return this.#index;
  }

  get Basket() {
    return this.#basket;
  }

  get Camera() {
    return this.#camera;
  }

  get Product() {
    return this.#product;
  }

  get NotFound() {
    return this.#notFound;
  }
}

export const routeConfig = new RouteConfig();
