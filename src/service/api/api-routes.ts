class ApiRouteConfig {
  #cameras = '/cameras';
  #promo = '/promo';
  #orders = '/orders';
  #reviews = '/reviews';
  #similar = '/similar'

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

  get SimilarApiRoute() {
    return this.#similar;
  }
}

export const apiRouteConfig = new ApiRouteConfig();
