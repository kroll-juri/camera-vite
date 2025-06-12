import { Camera } from '@slice/camera/types/types';

import { SetState } from '@shared-types/types';

export interface CatalogCallItemProps {
  props: Camera;
  setModalState: SetState<boolean>;
}

export interface CardItemProps extends CatalogCallItemProps {
  onActiveCardHandler: (id: number) => void;
  className: string;
  urlModifier: string;
}
