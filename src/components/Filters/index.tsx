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
        item.data = item.data.map((el) => ({ ...el, isChecked: false }));
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
      <InputField
        type="search"
        placeholder="Поиск по кличке..."
        name="name"
        value={nameInput}
        onChange={setNameInput}
      />
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
      <BaseButton variant="filled" color="primary" click={reset}>
        Сбросить настройки
      </BaseButton>
    </form>
  );
};

export default Filters;
