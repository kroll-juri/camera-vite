import { FooterNav } from '@app-footer/components/FooterNav/types/types';

enum FooterMenuListOne {
  catalog = 'Каталог',
  guarantee = 'Гарантии',
  delivery = 'Доставка',
  about = 'О компании',
}

enum FooterMenuListTwo {
  courses = 'Курсы операторов',
  blog = 'Блог',
  community = 'Сообщество',
}

enum FooterMenuListThree {
  faq = 'FAQ',
  ask = 'Задать вопрос',
}

export const FooterNavItemList: FooterNav[] = [
  {
    title: 'Навигация',
    menuList: Object.values(FooterMenuListOne),
  },
  {
    title: 'Ресурсы',
    menuList: Object.values(FooterMenuListTwo),
  },
  {
    title: 'Поддержка',
    menuList: Object.values(FooterMenuListThree),
  },
];
