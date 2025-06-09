import { SetState } from '@shared-types/types';

class ModalController {
  addScrollLockBody() {
    document.body.classList.add('scroll-lock');
  }

  removeScrollLockBody() {
    document.body.classList.remove('scroll-lock');
  }

  handleModalCloseOnButtonCLick(setFn: SetState<boolean>) {
    setFn(false);
  }
}

export const modalController = new ModalController();
