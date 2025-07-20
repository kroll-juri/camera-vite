import { useAppSelector } from '@hooks/useAppSelector';

import { getModalName } from '@slice/modal/modal-selectors/modal-selectors';

import { ActiveModalProps } from '@components/blocks/ActiveModal/types/types';
import { ModalComponent } from '@components/blocks/ModalComponent';
import { modalController } from '@components/blocks/ModalComponent/helpers';
import { CatalogCallItem } from '@main-page/components/Catalog/components/CatalogCallItem';
import { CatalogSuccessItem } from '@main-page/components/Catalog/components/CatalogSuccessItem';
import { ProductReviewModal } from '@product-page/components/ProductReviewModal';
import { ReviewSuccessModal } from '@product-page/components/ReviewSuccessModal';

export const ActiveModal = ({
  activeCard,
  inputValue,
  handleInputValueChange,
  handleFormSubmit,
  errors,
}: ActiveModalProps) => {
  const modalName = useAppSelector(getModalName);

  return (

    <ModalComponent
      isActive={modalName !== modalController.noModal}
      className={''}
    >
      {modalName === modalController.call && activeCard && <CatalogCallItem props={activeCard} />}
      {modalName === modalController.success && <CatalogSuccessItem />}
      {modalName === modalController.leaveReview &&
        activeCard &&
        inputValue &&
        handleFormSubmit &&
        handleInputValueChange && (
          <ProductReviewModal
            inputValue={inputValue}
            handleInputValueChange={handleInputValueChange}
            handleFormSubmit={handleFormSubmit}
            errors={errors ?? {}}
          />
        )}
      {modalName === modalController.successReview && <ReviewSuccessModal />}
    </ModalComponent>
  );
};
