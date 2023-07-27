import savePet from 'assets/images/forms/save-pet.svg';
import { BaseButton } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import InputField from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';

import { RemoveScroll } from 'react-remove-scroll';

import s from './styles.module.scss';

const FindPetForm = () => {
  const onInputChange = (str: string) => console.log(str);
  const handleChange = () => console.log('change');
  const reset = () => {
    console.log('reset');
  };

  return (
    <div className={s.formСontainer}>
      <h1>Вы нашли бездомного питомца?</h1>
      <p className={s.formСontainer__contacts}>
        Оставьте свои данные в форме ниже <br /> или позвоните нам по номеру: <strong>+7 (212) - 998–13–13 </strong>{' '}
        <br />
        Часы приёма звонков: <strong>10:00–22:00</strong>
      </p>
      <div className={s.contactsWithPicture}>
        <div className={s.contactsWithPicture__contacts}>
          <InputField onChange={onInputChange} placeholder="Введите имя..." label="Имя *" type="text" name="Имя" />
          <InputField
            onChange={onInputChange}
            placeholder="Введите почту..."
            label="Электронная почта *"
            type="text"
            name="Имя"
          />
          <InputField
            onChange={onInputChange}
            placeholder="(___) - ___ - ____"
            label="Телефон *"
            type="tel"
            name="number"
          />
        </div>
        <img src={savePet} alt="save-pet" />
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={onInputChange}
          placeholder="Введите текст..."
          label="Опишите ситуацию"
          name="description"
          smilePickerEnable
        />
      </div>
      <div className={s.choose}>
        <BaseCheckbox content="Подписаться на рассылку" name="имя" isChecked={true} value="имя" change={handleChange} />
        <BaseCheckbox
          content="Нажимая на кнопку я подтверждаю, что ознакомлен с условиями передачи персональных данных *"
          name="имя"
          isChecked={false}
          value="имя"
          change={handleChange}
        />
      </div>
      <div className={s.button}>
        <BaseButton variant="filled" color="primary" click={reset}>
          Отправить
        </BaseButton>
      </div>
    </div>
  );
};

export default FindPetForm;
