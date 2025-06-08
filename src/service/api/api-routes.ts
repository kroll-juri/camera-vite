class ApiRouteConfig {
  #cameras = '/cameras';
  #promo = '/promo';
  #reviews = '/reviews';
  #coupons = '/coupons';
  #orders = '/orders';

  get CamerasApiRoute() {
    return this.#cameras;
  }

  get PromoApiRoute() {
    return this.#promo;
  }

  get ReviewsApiRoute() {
    return this.#reviews;
  }

  get CouponsApiRoute() {
    return this.#coupons;
  }

  get OrdersApiRoute() {
    return this.#orders;
  }
}

export const apiRouteConfig = new ApiRouteConfig();
