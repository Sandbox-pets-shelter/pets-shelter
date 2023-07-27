import home from 'assets/images/forms/home.svg';
import { BaseButton, BaseRadio } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import InputField from 'components/ui/Input';

import s from './styles.module.scss';

const GiveAwayPet = () => {
  const onInputChange = (str: string) => console.log(str);
  const handleChange = () => console.log('change');
  const reset = () => {
    console.log('reset');
  };

  return (
    <div className={s.formСontainer}>
      <div className={s.formСontainer__titleWithPicture}>
        <h1>Отдать питомца</h1>
        <img src={home} alt="home" />
      </div>
      <p className={s.formСontainer__contacts}>
        Мы принимаем питомцев на кураторской основе, <br />
        социализируем и находим им новый дом и любящих хозяев.
        <br />
        Оставьте заявку и сотрудник приюта свяжется с вами, <br />
        чтобы обозначить наличие свободных мест и условия приёма.
      </p>
      <div className={s.contactsWithFio}>
        <div className={s.contactsWithFio__contacts}>
          <InputField onChange={onInputChange} placeholder="Введите имя..." label="Имя *" type="text" name="Имя" />
          <InputField
            onChange={onInputChange}
            placeholder="(___) - ___ - ____"
            label="Телефон *"
            type="tel"
            name="number"
          />
        </div>
        <div className={s.contactsWithFio__contacts}>
          <InputField
            onChange={onInputChange}
            placeholder="Введите фамилию..."
            label="Фамилия *"
            type="text"
            name="Фамилия"
          />
          <InputField
            onChange={onInputChange}
            placeholder="Введите почту..."
            label="Электронная почта *"
            type="text"
            name="Имя"
          />
        </div>
      </div>
      <div className={s.number}>
        <InputField
          onChange={onInputChange}
          placeholder="100"
          label="Сколько котиков вы хотите отдать?*"
          type="number"
          name="Имя"
        />
        <InputField
          onChange={onInputChange}
          placeholder="100"
          label="Сколько собачек вы хотите отдать?*"
          type="number"
          name="Имя"
        />
      </div>
      <div className={s.questions}>
        <p>Животное, которое вы хотите отдать, является домашним?*</p>
        <div className={s.questions__button}>
          <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
          <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Готовы ли вы самостоятельно привезти питомца в приют?*</p>
        <div className={s.questions__button}>
          <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
          <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
        </div>
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
          Отправить анкету
        </BaseButton>
      </div>
    </div>
  );
};

export default GiveAwayPet;
