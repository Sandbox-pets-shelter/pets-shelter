import { BaseSwitcher } from 'components';
import { useState } from 'react';

export const About = () => {
  const [isSwitched, setIsSwitched] = useState(true);

  const handleChange = (value: boolean) => {
    setIsSwitched(value);
  };

  return (
    <div>
      About Page
      <BaseSwitcher isSwitched={isSwitched} onChange={handleChange} />
    </div>
  );
};
