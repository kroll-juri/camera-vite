import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ButtonAddBasket } from '@app-ui/ButtonAddBasket';
import { StarsComponent } from '@app-ui/StarsComponent/StarsComponent';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { CameraSpecs } from '@product-page/components/Product/components/CameraSpecs';
import { TabsButton } from '@product-page/components/Product/components/TabsButton';
import { ProductPageProps, ProductTabs } from '@product-page/types/types';

export const Product = ({ props: currentCamera }: ProductPageProps) => {
  const {
    name,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    price,
    rating,
    reviewCount,
    type,
    description,
    level,
    category,
    vendorCode,
  } = currentCamera;

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as ProductTabs | null;
  const defaultTab: ProductTabs = 'description';
  const [activeTab, setActiveTab] = useState<ProductTabs>(tabParam || defaultTab);

  useEffect(() => {
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabsButtonClick = (tab: ProductTabs) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const dispatch = useAppDispatch();

  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source
                type="image/webp"
                srcSet={`/public/${previewImgWebp}, /public/${previewImgWebp2x}`}
              />
              <img
                src={`/public/${previewImg}`}
                srcSet={`/public/${previewImg2x}`}
                width="560"
                height="480"
                alt={name}
              />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <div className="rate product__rate">
              <StarsComponent rating={rating} />
              <p className="visually-hidden">Рейтинг: {rating}</p>
              <p className="rate__count">
                <span className="visually-hidden">Всего оценок:</span>
                {reviewCount}
              </p>
            </div>
            <p className="product__price">
              <span className="visually-hidden">Цена:</span>
              {price} ₽
            </p>
            <ButtonAddBasket
              activeCard={currentCamera}
              className={''}
            />
            <div className="tabs product__tabs">
              <div className="tabs__controls product__tabs-controls">
                <TabsButton
                  title={'Характеристики'}
                  isActive={activeTab === 'characteristics'}
                  onClick={() => handleTabsButtonClick('characteristics')}
                />
                <TabsButton
                  title={'Описание'}
                  isActive={activeTab === 'description'}
                  onClick={() => handleTabsButtonClick('description')}
                />
              </div>
              <div className="tabs__content">
                <div className={`tabs__element ${activeTab === 'characteristics' ? 'is-active' : ''}`}>
                  <CameraSpecs props={{ vendorCode, category, type, level }} />
                </div>
                <div className={`tabs__element ${activeTab === 'description' ? 'is-active' : ''}`}>
                  <div className="product__tabs-text">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
