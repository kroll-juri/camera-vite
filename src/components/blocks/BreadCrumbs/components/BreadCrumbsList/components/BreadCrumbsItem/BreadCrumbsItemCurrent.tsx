import { BreadCrumbsCurrentProps } from '@components/blocks/BreadCrumbs/types/types';

export const BreadCrumbsItemCurrent = ({ name }: BreadCrumbsCurrentProps) => {
  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">{name}</span>
    </li>
  );
};
