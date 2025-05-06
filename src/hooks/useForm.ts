import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { useAppDispatch } from '@hooks/useAppDispatch';

import { fetchReviewData, postReviewAction } from '@store/api-action/api-action';
import { Camera } from '@slice/camera/types/types';
import { setModalOpen } from '@slice/modal/modal-slice/modal-slice';

import { validateReviewForm } from '@utils/functions/common/validateReviewForm';

import { modalController } from '@components/blocks/ModalComponent/helpers';
import { ReviewFormData } from '@product-page/types/types';

export const useForm = (activeCard: Camera | null) => {
  const [inputValue, setInputValue] = useState<ReviewFormData>({
    cameraId: 0,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  // Ошибки по полям: ключ — имя поля, значение — true, если ошибка
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeCard?.id && inputValue.cameraId !== activeCard.id) {
      setInputValue((prev) => ({
        ...prev,
        cameraId: activeCard.id,
      }));
    }
  }, [activeCard]);

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsedValue = name === 'rating' ? Number(value) : value;

    const { minLength, maxLength } = validateReviewForm(name);

    const isInvalid =
      typeof parsedValue === 'string' && (parsedValue.length < minLength || parsedValue.length > maxLength);

    setInputValue((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));

    setErrors((prev) => {
      const newErrors = {
        ...prev,
        [name]: isInvalid,
      };
      return newErrors;
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      return;
    }

    if (inputValue.cameraId) {
      dispatch(postReviewAction(inputValue));
      dispatch(fetchReviewData(inputValue.cameraId.toString()));
      dispatch(
        setModalOpen({
          name: modalController.successReview,
          title: modalController.successReview,
        }),
      );
    }
  };

  return {
    inputValue,
    handleInputValueChange,
    handleFormSubmit,
    errors,
  };
};
