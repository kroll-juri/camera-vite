import { Camera } from '@slice/camera/types/types';

import { modalController } from '@components/blocks/ModalComponent/helpers';

const modalName = {
  noModal: modalController.noModal,
  call: modalController.call,
  success: modalController.success,
  leaveReview: modalController.leaveReview,
} as const;

type ModalName = (typeof modalName)[keyof typeof modalName];

const modalTitle = {
  noBasketTitle: modalController.noBasketTitle,
  addBasketTitle: modalController.addBasketTitle,
  removeBasketTitle: modalController.removeBasketTitle,
  thanksForPurchasing: modalController.thanksForPurchasing,
  leaveReview: modalController.leaveReview,
} as const;

type ModalTitle = (typeof modalTitle)[keyof typeof modalTitle];

export interface ModalState {
  name: ModalName;
  title: ModalTitle;
  activeCard: Camera | null;
}
