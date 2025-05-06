import {
  TEXTINPUT_MAX_LENGTH,
  TEXTINPUT_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
} from '@utils/const/const';

export const validateReviewForm = (name: string) => {
  let minLength: number;
  let maxLength: number;

  if (name === 'userName') {
    minLength = USERNAME_MIN_LENGTH;
    maxLength = USERNAME_MAX_LENGTH;
  } else {
    minLength = TEXTINPUT_MIN_LENGTH;
    maxLength = TEXTINPUT_MAX_LENGTH;
  }

  return { minLength, maxLength };
};
