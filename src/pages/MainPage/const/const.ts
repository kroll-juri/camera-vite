const CamerasCategory = {
  photocamera: 'Фотоаппарат',
  videocamera: 'Видеокамера',
} as const;

const CamerasType = {
  digital: 'Цифровая',
  film: 'Плёночная',
  snapshot: 'Моментальная',
  collection: 'Коллекционная',
} as const;

const CamerasLevel = {
  zero: 'Нулевой',
  'non-professional': 'Любительский',
  professional: 'Профессиональный',
} as const;

const CamerasFilterGroups = {
  level: 'Уровень',
  type: 'Тип камеры',
};

const PLACEHOLDER_LOW_DEFAULT = '1990';
const PLACEHOLDER_HIGH_DEFAULT = '199000';

const MAX_AMOUNT_SHOWED_CARDS = 9;

export {
  CamerasCategory,
  CamerasFilterGroups,
  CamerasLevel,
  CamerasType,
  MAX_AMOUNT_SHOWED_CARDS,
  PLACEHOLDER_HIGH_DEFAULT,
  PLACEHOLDER_LOW_DEFAULT,
};
