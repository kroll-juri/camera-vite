import { useNavigate } from 'react-router-dom';

import { ButtonCloseModal } from '@app-ui/ButtonCloseModal';
import { IconReviewSuccess } from '@app-ui/IconReviewSuccess';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { getModalTitle } from '@slice/modal/modal-selectors/modal-selectors';
import { setModalClose } from '@slice/modal/modal-slice/modal-slice';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const ReviewSuccessModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const title = useAppSelector(getModalTitle);
  return (
    <>
      <p className="title title--h4">{title}</p>
      <IconReviewSuccess />
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={() => {
            navigate(routeConfig.Index);
            dispatch(setModalClose());
          }}
        >
          Вернуться к покупкам
        </button>
      </div>
      <ButtonCloseModal />
    </>
  );
};
