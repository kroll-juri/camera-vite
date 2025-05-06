import { ChangeEvent, FormEvent } from 'react';

import { Camera } from '@slice/camera/types/types';

import { ReviewFormData } from '@product-page/types/types';

export interface ActiveModalProps {
  activeCard?: Camera | null;
  inputValue?: ReviewFormData;
  handleInputValueChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit?: (e: FormEvent) => void;
  errors?: Record<string, boolean>;
}
