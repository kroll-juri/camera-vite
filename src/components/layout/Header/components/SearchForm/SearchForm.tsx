import { SearchFormItem } from 'components/layout/Header/components/SearchForm/components/SearchFormItem';

import { IconClose } from '@app-ui/IconClose';
import { IconLens } from '@app-ui/IconLens';

import { useAppSelector } from '@hooks/useAppSelector';
import { useSearch } from '@hooks/useSearch';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';
import { Camera } from '@slice/camera/types/types';

export const SearchForm = () => {
  const camerasList = useAppSelector(getCamerasList);

  const {
    searchResults,
    listClassName,
    handleKeyDown,
    value,
    handleInputValueChange,
    inputRef,
    itemsRef,
    resultsRef,
    buttonResetVisibilityStyle,
    handleClearInputButtonClick,
  } = useSearch(camerasList);

  return (
    <div
      className={`form-search ${listClassName}`}
      onKeyDown={handleKeyDown}
    >
      <form>
        <label>
          <IconLens />
          <input
            value={value}
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            onChange={handleInputValueChange}
            ref={inputRef}
          />
        </label>
        <ul
          className="form-search__select-list"
          ref={resultsRef}
        >
          {searchResults &&
            searchResults.map((item: Camera, index) => (
              <SearchFormItem
                key={item.id}
                id={item.id}
                value={item.name}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
              />
            ))}
        </ul>
      </form>
      {buttonResetVisibilityStyle && (
        <button
          className="form-search__reset"
          style={buttonResetVisibilityStyle}
          type="reset"
          onClick={handleClearInputButtonClick}
        >
          <IconClose />
          <span className="visually-hidden">Сбросить поиск</span>
        </button>
      )}
    </div>
  );
};
