import girlPet from 'assets/images/forms/girl-pet.svg';
import { BaseButton, BaseRadio } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import InputField from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';

import { RemoveScroll } from 'react-remove-scroll';

import s from './styles.module.scss';

const TakePetHome = () => {
  const onInputChange = (str: string) => console.log(str);
  const handleChange = () => console.log('change');
  const reset = () => {
    console.log('reset');
  };

  return (
    <RemoveScroll enabled style={{ position: 'absolute', left: 0 }}>
      <div className={s.formСontainer}>
        <div className={s.formСontainer__titleWithPicture}>
          <h1>Забрать питомца домой</h1>
          <img src={girlPet} alt="girl-pet" />
        </div>
        <p className={s.formСontainer__contacts}>
          Заполните, пожалуйста, все поля нашей анкеты — это позволит <br /> нам понять ваши условия для приема питомца
          в семью.
          <br />
          Мы отдаем всех питомцев по итогам собеседования.
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
            placeholder="9"
            label="Сколько вам полных лет? *"
            type="number"
            name="Имя"
          />
        </div>
        <div className={s.questions}>
          <p>Есть ли у вас домашние животные? *</p>
          <div className={s.questions__button}>
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
          </div>
        </div>
        <div className={s.questions}>
          <p>Если да, то какие животные?</p>
          <div className={s.questions__button}>
            <BaseCheckbox content="Кошка/ки" name="имя" isChecked={true} value="имя" change={handleChange} />
            <BaseCheckbox content="Собака/ки" name="имя" isChecked={true} value="имя" change={handleChange} />
          </div>
        </div>
        <div className={s.descriptionTwo}>
          <Textarea
            onFileUpload={onInputChange}
            onChangeTextarea={onInputChange}
            placeholder="Введите текст..."
            label="Есть ли у вас опыт содержания животных? Если да, то каких?"
            name="description"
            smilePickerEnable
          />
        </div>
        <div className={s.questions}>
          <p>Есть ли у вас или у ваших близких аллергия на шерсть? *</p>
          <div className={s.questions__button}>
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
          </div>
        </div>
        <div className={s.questions}>
          <p>Есть ли у вас дома дети до 10 лет? *</p>
          <div className={s.questions__button}>
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
            <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
          </div>
        </div>
        <div className={s.description}>
          <Textarea
            onFileUpload={onInputChange}
            onChangeTextarea={onInputChange}
            placeholder="Введите текст..."
            label="Дополнительная информация"
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
            Отправить анкету
          </BaseButton>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default TakePetHome;
