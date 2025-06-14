import { RefObject } from 'react';

export enum NavItemTitles {
  catalog = 'Каталог',
  guarantee = 'Гарантии',
  delivery = 'Доставка',
  about = 'О компании',
}

export interface NavItemProps {
  title: NavItemTitles;
}

export interface HeaderProps {
  childRef: RefObject<HTMLAnchorElement | null>;
}

export interface SearchFormItemProps {
  value: string;
  id: number;
}
