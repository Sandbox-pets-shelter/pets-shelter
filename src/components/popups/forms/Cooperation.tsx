import cooperation from 'assets/images/forms/cooperation.svg';
import { BaseButton } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import InputField from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';

import { RemoveScroll } from 'react-remove-scroll';

import s from './styles.module.scss';

const Cooperation = () => {
  const onInputChange = (str: string) => console.log(str);
  const handleChange = () => console.log('change');
  const reset = () => {
    console.log('reset');
  };

  return (
    <RemoveScroll enabled style={{ position: 'absolute', left: 0 }}>
      <div className={s.formСontainer}>
        <h1>Предложения по сотрудничеству</h1>
        <p className={s.formСontainer__contacts}>Изложите, пожалуйста, ваши предложения в форме ниже</p>
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
          <img src={cooperation} alt="cooperation" />
        </div>
        <div className={s.description}>
          <Textarea
            onChangeTextarea={onInputChange}
            placeholder="Введите текст..."
            label="Ваши предложения по сотрудничеству:"
            name="description"
            smilePickerEnable
          />
        </div>
        <div className={s.choose}>
          <BaseCheckbox
            content="Подписаться на рассылку"
            name="имя"
            isChecked={true}
            value="имя"
            change={handleChange}
          />
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
    </RemoveScroll>
  );
};

export default Cooperation;
