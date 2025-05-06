class ModalController {
  #noModal = '';
  #call = 'call';
  #success = 'success';

  #noBasketTitle = '';
  #addBasketTitle = 'Добавить товар в корзину';
  #removeBasketTitle = 'Удалить этот товар?';
  #thanksForPurchasing = 'Спасибо за покупку';

  #leaveReview = 'Оставить отзыв';
  #successReview = 'Спасибо за отзыв';

  get noModal() {
    return this.#noModal;
  }

  get call() {
    return this.#call;
  }

  get success() {
    return this.#success;
  }

  get noBasketTitle() {
    return this.#noBasketTitle;
  }

  get addBasketTitle() {
    return this.#addBasketTitle;
  }

  get removeBasketTitle() {
    return this.#removeBasketTitle;
  }

  get thanksForPurchasing() {
    return this.#thanksForPurchasing;
  }

  get leaveReview() {
    return this.#leaveReview;
  }

  get successReview() {
    return this.#successReview;
  }

  addScrollLockBody() {
    document.body.classList.add('scroll-lock');
  }

  removeScrollLockBody() {
    document.body.classList.remove('scroll-lock');
  }
}

export const modalController = new ModalController();
