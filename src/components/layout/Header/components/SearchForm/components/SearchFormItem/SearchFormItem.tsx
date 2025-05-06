import { forwardRef } from 'react';

import { Link } from 'react-router-dom';

import { SearchFormItemProps } from '@app-header/types/types';

export const SearchFormItem = forwardRef<HTMLLIElement, SearchFormItemProps>(({ value, id: cameraId }, ref) => (
  <Link to={`camera/${cameraId}`}>
    <li
      className="form-search__select-item"
      tabIndex={0}
      ref={ref}
    >
      {value}
    </li>
  </Link>
));

SearchFormItem.displayName = 'SearchFormItem';
