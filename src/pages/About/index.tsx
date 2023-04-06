import { BaseRadio } from 'components';
import { useState } from 'react';

export const About = () => {
  const [topping, setTopping] = useState('man');

  const els = [
    {
      name: 'gender',
      value: 'man'
    },
    {
      name: 'gender',
      value: 'women'
    },
    {
      name: 'gender',
      value: 'cat'
    }
  ];

  const handleChange = (value: string) => {
    setTopping(value);
  };

  return (
    <div>
      {els.map((el: any) => (
        <BaseRadio key={el.value} name={el.name} value={el.value} change={handleChange} topping={topping} />
      ))}
    </div>
  );
};
