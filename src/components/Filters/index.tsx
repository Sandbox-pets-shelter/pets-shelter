import { BaseCheckbox, BaseButton } from 'components';
import InputField from 'components/ui/Input';
import { filtersData } from 'mocks/filter';
import { Fragment, useState } from 'react';

import s from './styles.module.scss';

const Filters = () => {
  const [data, setData] = useState(filtersData);

  const [nameInput, setNameInput] = useState('');
  const onChange = (str: string) => {
    setNameInput(str);
  };

  const reset = () => {
    setData(
      data.map((item) => {
        item.data = item.data.map((el) => {
          return { ...el, isChecked: false };
        });
        return item;
      })
    );
  };

  const handleChange = (name: string, value: string) => {
    setData(
      data.map((item) => {
        item.data = item.data.map((el) =>
          el.name === name && el.value === value ? { ...el, isChecked: !el.isChecked } : el
        );
        return item;
      })
    );
  };

  return (
    <form className={s.filters}>
      <InputField type='search' placeholder='Поиск по кличке...' name='name' value={nameInput} onChange={onChange}/>
      {data.map((item) => (
        <Fragment key={item.id}>
          {item.title && <div className={s.filters__title}> {item.title} </div>}
          {item.data.map((el, index) => (
            <BaseCheckbox
              key={`${el.name}-${index}`}
              name={el.name}
              content={el.content}
              isChecked={el.isChecked}
              value={el.value}
              change={handleChange}
            />
          ))}
        </Fragment>
      ))}
      <BaseButton variant="filled" color="primary" click={reset}>
        Сбросить настройки
      </BaseButton>
    </form>
  );
};

export default Filters;
