import { useAppSelector } from '@hooks/useAppSelector';
import { useBasket } from '@hooks/useBasket';

import { getBasketCameraList } from '@slice/basket/basket-selectors/basket-selectors';
import { getOrderLoading, getOrderSuccess } from '@slice/order/order-selectors/order-selectors';
import { getPromoList } from '@slice/promo/promo-selectors/promo-selectors';

import { calculateDiscount } from '@utils/functions/common/calculate-discount';
import { getUniqueList } from '@utils/functions/common/get-unique-list';
import { getPromoItemsCount } from '@utils/functions/common/getPromoItemsCount';

import { BasketItem } from '@basket-page/components/Basket/components/BasketItem';
import { ActiveModal } from '@components/blocks/ActiveModal';

export const Basket = () => {
  const isLoading = useAppSelector(getOrderLoading);
  const isSuccess = useAppSelector(getOrderSuccess);

  const basketStorageData = useAppSelector(getBasketCameraList);
  const promoList = useAppSelector(getPromoList);

  const basketTotalPrice = basketStorageData.reduce((acc, item) => acc + item.price, 0) || 0;
  const totalItems = basketStorageData.length;
  const promoItemsCount = getPromoItemsCount(basketStorageData, promoList);

  const discount = calculateDiscount({
    totalItems,
    totalPrice: basketTotalPrice,
    promoItems: promoItemsCount,
  });

  const cameraIdList = basketStorageData.map((item) => item.id);

  const basketData = getUniqueList(basketStorageData, 'id');

  const { handleOrderSubmit } = useBasket(cameraIdList, isSuccess);

  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <ul className="basket__list">
          {basketData.map((item) => (
            <BasketItem
              basketStorageData={basketStorageData}
              props={item}
              key={item.id}
            />
          ))}
        </ul>
        <div className="basket__summary">
          <div className="basket__promo"></div>
          <div className="basket__summary-order">
            <p className="basket__summary-item">
              <span className="basket__summary-text">Всего:</span>
              <span className="basket__summary-value">{basketTotalPrice} ₽</span>
            </p>
            <p className="basket__summary-item">
              <span className="basket__summary-text">Скидка:</span>
              <span className={`basket__summary-value ${discount > 0 ? 'basket__summary-value--bonus' : ''}`}>
                {discount.toFixed(0)} ₽
              </span>
            </p>
            <p className="basket__summary-item">
              <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
              <span className="basket__summary-value basket__summary-value--total">
                {(basketTotalPrice - discount).toFixed(0)} ₽
              </span>
            </p>

            <button
              className="btn btn--purple"
              type="button"
              disabled={basketStorageData.length === 0 || isLoading}
              onClick={handleOrderSubmit}
            >
              {isLoading ? 'Оформление...' : 'Оформить заказ'}
            </button>
            {isSuccess && <ActiveModal />}
            <ActiveModal />
          </div>
        </div>
      </div>
    </section>
  );
};
