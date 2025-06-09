import { Camera } from '@slice/camera/types/types';

import { SetState } from '@shared-types/types';

export interface CardItemProps {
  props: Camera;
  onActiveCardHandler: (id: number) => void;
  setIsModalState: SetState<boolean>;
}

export interface CatalogCallItemProps {
  activeCamera: Camera;
  setIsModalState: SetState<boolean>;
}
