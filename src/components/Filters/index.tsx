import { BaseCheckbox, BaseButton } from 'components';
import InputField from 'components/ui/Input';
import { filtersData } from 'mocks/filter';
import { useState } from 'react';

import s from './styles.module.scss';

const Filters = () => {
  const [filters, setFilters] = useState(filtersData);

  const [nameInput, setNameInput] = useState('');

  const reset = () => {
    setFilters(
      filters.map((item) => {
        item.data = item.data.map((el) => {
          return { ...el, isChecked: false };
        });
        return item;
      })
    );
  };

  const handleChange = (name: string, value: string) => {
    setFilters(
      filters.map((filter) => {
        filter.data = filter.data.map((el) =>
          el.name === name && el.value === value ? { ...el, isChecked: !el.isChecked } : el
        );
        return filter;
      })
    );
  };

  return (
    <form className={s.filters}>
      <InputField type='search' placeholder='Поиск по кличке...' name='name' value={nameInput} onChange={setNameInput}/>
      {filters.map((filter) => (
        <>
          {filter.title && <div className={s.filters__title}> {filter.title} </div>}
          {filter.data.map((el, index) => (
            <BaseCheckbox
              key={`${el.name}-${index}`}
              name={el.name}
              content={el.content}
              isChecked={el.isChecked}
              value={el.value}
              change={handleChange}
            />
          ))}
        </>
      ))}
      <BaseButton variant="filled" color="primary" click={reset}>
        Сбросить настройки
      </BaseButton>
    </form>
  );
};

export default Filters;
