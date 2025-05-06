class ApiRouteConfig {
  #cameras = '/cameras';
  #promo = '/promo';
  #orders = '/orders';
  #reviews = '/reviews';

  get CamerasApiRoute() {
    return this.#cameras;
  }

  get PromoApiRoute() {
    return this.#promo;
  }

  get OrdersApiRoute() {
    return this.#orders;
  }

  get ReviewsApiRoute() {
    return this.#reviews;
  }
}

export const apiRouteConfig = new ApiRouteConfig();
