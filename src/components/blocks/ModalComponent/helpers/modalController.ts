import { SetState } from '@shared-types/types';

class ModalController {
  addScrollLockBody() {
    document.body.classList.add('scroll-lock');
  }

  removeScrollLockBody() {
    document.body.classList.remove('scroll-lock');
  }

  handleChangeModalState(setFn: SetState<boolean>, value: boolean) {
    setFn(value);
  }
}

export const modalController = new ModalController();
