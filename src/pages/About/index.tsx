import { BaseRadio } from 'components';

export const About = () => {
  const el = {
    name: 'checkbox',
    content: 'content',
    isChecked: true,
    value: 'value'
  };

  const handleChange = () => {
    console.log('change');
  };

  return (
    <div>
      <BaseRadio name={el.name} content={el.content} isChecked={el.isChecked} value={el.value} change={handleChange} />
    </div>
  );
};
