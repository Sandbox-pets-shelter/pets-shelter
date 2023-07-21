import girlPet from 'assets/images/forms/girl-pet.svg';
import { BaseButton, BaseRadio } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import InputField from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';

import { RemoveScroll } from 'react-remove-scroll';

import s from './styles.module.scss';

const DidntFindPetSite = () => {
  const onInputChange = (str: string) => console.log(str);
  const handleChange = () => console.log('change');
  const searchCountry = (str: string) => console.log(str);
  const reset = () => {
    console.log('reset');
  };

  return (
    <RemoveScroll enabled style={{ position: 'absolute', left: 0 }}>
      <div className={s.formСontainer}>
        <div className={s.formСontainer__titleWithPicture}>
          <h1>Не нашли питомца на сайте?</h1>
          <img src={girlPet} alt="girl-pet" />
        </div>
        <p className={s.formСontainer__contacts}>
          Заполните пожалуйста все поля нашей анкеты, это позволит <br />
          нам понять ваши предпочтения
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
            placeholder="Алматы"
            label="Из какого вы города?"
            type="text"
            name="Имя"
          />
          <InputField onChange={onInputChange} placeholder="100" label="Сколько вам лет?" type="number" name="Имя" />
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Вид</p>
          </div>
          <div className={s.questions__button}>
            <BaseCheckbox content="Кошки" name="имя" isChecked={true} value="имя" change={handleChange} />
            <BaseCheckbox content="Собаки" name="имя" isChecked={true} value="имя" change={handleChange} />
          </div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Пол</p>
          </div>
          <div className={s.questions__button}>
            <div className={s.questions__button__row}>
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Мальчик" />
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Девочка" />
            </div>
            <div className={s.questions__button__column}>
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Не важно" />
            </div>
          </div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Цвет шерсти</p>
          </div>
          <div className={s.questions__button}>
            <div className={s.questions__button__row}>
              <BaseCheckbox content="Тёмный" name="имя" isChecked={false} value="имя" change={handleChange} />
              <BaseCheckbox content="Рыжий" name="имя" isChecked={false} value="имя" change={handleChange} />
            </div>
            <div className={s.questions__button__column}>
              <BaseCheckbox content="Светлый" name="имя" isChecked={false} value="имя" change={handleChange} />
              <BaseCheckbox content="Не важно" name="имя" isChecked={false} value="имя" change={handleChange} />
            </div>
          </div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Длина шерсти</p>
          </div>
          <div className={s.questions__button}>
            <div className={s.questions__button__row}>
              <BaseCheckbox content="Короткая" name="имя" isChecked={false} value="имя" change={handleChange} />
              <BaseCheckbox content="Длинная" name="имя" isChecked={false} value="имя" change={handleChange} />
            </div>
            <div className={s.questions__button__column}>
              <BaseCheckbox content="Средняя" name="имя" isChecked={false} value="имя" change={handleChange} />
              <BaseCheckbox content="Не важно" name="имя" isChecked={false} value="имя" change={handleChange} />
            </div>
          </div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Готовы ли вы взять животное с проблемами со здоровьем?</p>
          </div>
          <div className={s.questions__button}>
            <div className={s.questions__button__row}>
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Да" />
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Смотря какие" />
            </div>
            <div className={s.questions__button__column}>
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Нет" />
              <BaseRadio change={handleChange} name="radio" topping="Нет" value="Не важно" />
            </div>
          </div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <p>Есть ли у вас или у ваших близких аллергия на шерсть?</p>
          </div>
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
            label="Пожалуйста, опишите место где выживете (квартира, дом, аредуемая жилпрощадь и т.д.?"
            name="description"
            smilePickerEnable
          />
        </div>
        <div className={s.description}>
          <Textarea
            onFileUpload={onInputChange}
            onChangeTextarea={onInputChange}
            placeholder="Введите текст..."
            label="Есть ли у вас опыт содержания животных Если да, то каких?"
            name="description"
            smilePickerEnable
          />
        </div>
        <div className={s.description}>
          <Textarea
            onFileUpload={onInputChange}
            onChangeTextarea={onInputChange}
            placeholder="Введите текст..."
            label="Есть ли у вас другие животные? Если да, то какие? Как относятся к другим животным?"
            name="description"
            smilePickerEnable
          />
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

export default DidntFindPetSite;
