import { AsideBanner } from '@main-page/components/Catalog/components/AsideBanner';
import { CardList } from '@main-page/components/Catalog/components/CardList';
import { SortForm } from '@main-page/components/Catalog/components/SortForm';

export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <AsideBanner />
          <div className="catalog__content">
            <SortForm />
            <CardList />
          </div>
        </div>
      </div>
    </section>
  );
};
