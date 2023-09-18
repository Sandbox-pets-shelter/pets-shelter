import filterIcon from 'assets/icons/filterIcon.svg';
import roundClose from 'assets/icons/roundClose.svg';
import { BaseCheckbox, BaseButton } from 'components';
import InputField from 'components/ui/Input';
import useBreakpoints from 'hooks/useBreakpoints';
import { filtersData } from 'mocks/filter';
import { useState, useEffect } from 'react';

import s from './styles.module.scss';

const Filters = () => {
  const [filters, setFilters] = useState(filtersData);

  const [nameInput, setNameInput] = useState('');

  const reset = () => {
    const clearFilters = filters.map((filter) => {
      filter.data = filter.data.map((el) => ({ ...el, isChecked: false }));
      return filter;
    });

    setFilters(clearFilters);
  };

  const handleChange = (name: string, value: string) => {
    const changedFilters = filters.map((filter) => {
      filter.data = filter.data.map((el) =>
        el.name === name && el.value === value ? { ...el, isChecked: !el.isChecked } : el
      );
      return filter;
    });
    setFilters(changedFilters);
  };

  const [isOpen, setIsOpen] = useState(true);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const toggleFilters = () => setIsOpen(!isOpen);
  const toggleFiltersImg = () => setIsFiltersVisible((prev) => !prev);

  const { lgBreakpoint } = useBreakpoints();

  useEffect(() => {
    if (lgBreakpoint) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [lgBreakpoint]);

  return (
    <div className={s.filters}>
      {!lgBreakpoint && (
        <div className={s.filters__wrapper}>
          <h3 className={s.filters__wrapper_title}>Фильтр</h3>
          <button className={s.filters__btn} onClick={toggleFilters}>
            <img
              className={s.filters__btn_icon}
              src={isFiltersVisible ? roundClose : filterIcon}
              onClick={toggleFiltersImg}
            />
            {!isFiltersVisible && <div className={s.filters__icon_number}>4</div>}
          </button>
        </div>
      )}
      {isOpen && (
        <form className={s.filters__form}>
          <div className={s.filters__input}>
            <InputField
              type="search"
              placeholder="Поиск по кличке..."
              name="name"
              value={nameInput}
              onChange={setNameInput}
            />
          </div>
          {filters.map((filter) => (
            <>
              {filter.title && <h4 className={s.filters__title}> {filter.title} </h4>}
              {filter.data?.map(({ name, content, isChecked, value }, index) => (
                <BaseCheckbox
                  key={`${name}-${index}`}
                  name={name}
                  content={content}
                  isChecked={isChecked}
                  value={value}
                  change={handleChange}
                />
              ))}
            </>
          ))}
          <div className={s.filters__btn_apply}>
            <BaseButton variant="filled" color="primary">
              Применить
            </BaseButton>
          </div>
          <div className={s.filters__btn_reset}>
            <BaseButton variant="outlined" color="accent" click={reset}>
              Сбросить фильтры
            </BaseButton>
          </div>
        </form>
      )}
    </div>
  );
};
export default Filters;
