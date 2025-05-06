import { Link } from 'react-router-dom';

import { IconArrowMini } from '@app-ui/IconArrowMini';

import { BreadCrumbsLinkProps } from '@components/blocks/BreadCrumbs/types/types';

export const BreadCrumbsItemLink = ({ route, title }: BreadCrumbsLinkProps) => {
  return (
    <>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          to={route}
        >
          {title}
          <IconArrowMini />
        </Link>
      </li>
    </>
  );
};
