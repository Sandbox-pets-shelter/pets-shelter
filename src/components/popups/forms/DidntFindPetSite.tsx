import { forms } from 'api/public';
import { API } from 'api/types';
import girlPet from 'assets/images/forms/girl-pet.svg';
import { BaseButton, BaseRadio } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import CloseIcon from 'components/ui/CloseIcon';
import InputField from 'components/ui/Input';
import Textarea from 'components/ui/Textarea';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { hideModalAction, showModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import s from './styles.module.scss';

const DidntFindPetSite = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [city, setCity] = useState('');

  const [cat, setCategoryCat] = useState(false);
  const [dog, setCategoryDog] = useState(false);

  const [gender, setGender] = useState('');

  const [dark, setWoolColorDark] = useState(false);
  const [red, setWoolColorRed] = useState(false);
  const [light, setWoolColorLight] = useState(false);
  const [dont, setWoolColorDont] = useState(false);

  const [short, setwoolLengthShort] = useState(false);
  const [long, setwoolLengthLong] = useState(false);
  const [medium, setwoolLengthMedium] = useState(false);
  const [dontL, setwoolLengthDont] = useState(false);

  const [healthStatus, setHealthStatus] = useState('');
  const [allergy, setAllergy] = useState('');
  const [questionnaires, setQuestionnaires] = useState('');

  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const closeForm = () => dispatch(hideModalAction(ModalWindows.DIDNT_FIND_PETS_FORM));
  const openSuccessSendFormModal = () => dispatch(showModalAction(ModalWindows.SUCCESS_SEND_FORM));

  const sendForm = async () => {
    const data: API.Public.Forms.PetRequests.Request = {
      firstName,
      lastName,
      age: Number(age),
      email,
      phoneNumber,
      city: String(city),
      category: 'cat',
      gender,
      woolColor: 'dark',
      woolLength: 'short',
      healthStatus,
      allergy: allergy === 'Да',
      questionnaires,
      subscribeToNewsletter,
      personalDataAgreement
    };

    try {
      setIsPending(true);
      await forms.petRequests(data);
      closeForm();
      openSuccessSendFormModal();
    } catch (e) {
      throw e;
    } finally {
      setIsPending(false);
    }
  };
  return (
    <div className={s.formСontainer}>
      <CloseIcon variant={'onlyIcon'} onClick={closeForm} />
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
          <InputField
            onChange={setFirstName}
            value={firstName}
            placeholder="Введите имя..."
            label="Имя *"
            type="text"
            name="Имя"
          />
          <InputField
            onChange={setPhoneNumber}
            value={phoneNumber}
            placeholder="(___) - ___ - ____"
            label="Телефон *"
            type="tel"
            name="number"
          />
        </div>
        <div className={s.contactsWithFio__contacts}>
          <InputField
            onChange={setLastName}
            value={lastName}
            placeholder="Введите фамилию..."
            label="Фамилия *"
            type="text"
            name="Фамилия"
          />
          <InputField
            onChange={setEmail}
            value={email}
            placeholder="Введите почту..."
            label="Электронная почта *"
            type="text"
            name="Имя"
          />
        </div>
      </div>
      <div className={s.number}>
        <InputField
          onChange={setCity}
          value={city}
          placeholder="Алматы"
          label="Из какого вы города?"
          type="number"
          name="Имя"
        />
        <InputField
          onChange={setAge}
          value={age}
          placeholder="9"
          label="Сколько вам полных лет? *"
          type="number"
          name="Имя"
        />
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Вид</p>
        </div>
        <div className={s.questions__button}>
          <BaseCheckbox content="Кошки" isChecked={cat} onChange={setCategoryCat} />
          <BaseCheckbox content="Собаки" isChecked={dog} onChange={setCategoryDog} />
        </div>
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Пол</p>
        </div>
        <div className={s.questions__button}>
          <div className={s.questions__button__row}>
            <BaseRadio change={setGender} name="radio" topping={gender} value="Мальчик" />
            <BaseRadio change={setGender} name="radio" topping={gender} value="Девочка" />
          </div>
          <div className={s.questions__button__column}>
            <BaseRadio change={setGender} name="radio" topping={gender} value="Не важно" />
          </div>
        </div>
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Цвет шерсти</p>
        </div>
        <div className={s.questions__button}>
          <div className={s.questions__button__row}>
            <BaseCheckbox content="Темный" isChecked={dark} onChange={setWoolColorDark} />
            <BaseCheckbox content="Рыжий" isChecked={red} onChange={setWoolColorRed} />
          </div>
          <div className={s.questions__button__column}>
            <BaseCheckbox content="Светлый" isChecked={light} onChange={setWoolColorLight} />
            <BaseCheckbox content="Не важно" isChecked={dont} onChange={setWoolColorDont} />
          </div>
        </div>
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Длина шерсти</p>
        </div>
        <div className={s.questions__button}>
          <div className={s.questions__button__row}>
            <BaseCheckbox content="Короткая" isChecked={short} onChange={setwoolLengthShort} />
            <BaseCheckbox content="Длинная" isChecked={long} onChange={setwoolLengthLong} />
          </div>
          <div className={s.questions__button__column}>
            <BaseCheckbox content="Средняя" isChecked={medium} onChange={setwoolLengthMedium} />
            <BaseCheckbox content="Не важно" isChecked={dontL} onChange={setwoolLengthDont} />
          </div>
        </div>
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Готовы ли вы взять животное с проблемами со здоровьем?</p>
        </div>
        <div className={s.questions__button}>
          <div className={s.questions__button__row}>
            <BaseRadio change={setHealthStatus} name="radio" topping={healthStatus} value="Да" />
            <BaseRadio change={setHealthStatus} name="radio" topping={healthStatus} value="Смотря какие" />
          </div>
          <div className={s.questions__button__column}>
            <BaseRadio change={setHealthStatus} name="radio" topping={healthStatus} value="Нет" />
            <BaseRadio change={setHealthStatus} name="radio" topping={healthStatus} value="Не важно" />
          </div>
        </div>
      </div>
      <div className={s.questions}>
        <div className={s.questions__content}>
          <p>Есть ли у вас или у ваших близких аллергия на шерсть?</p>
        </div>
        <div className={s.questions__button}>
          <BaseRadio change={setAllergy} name="radio" topping={allergy} value=" Да" />
          <BaseRadio change={setAllergy} name="radio" topping={allergy} value="Нет" />
        </div>
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          onFileUpload={setQuestionnaires}
          placeholder="Введите текст..."
          label="Пожалуйста, опишите место где выживете (квартира, дом, аредуемая жилпрощадь и т.д.?"
          name="description"
        />
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          onFileUpload={setQuestionnaires}
          placeholder="Введите текст..."
          label="Есть ли у вас опыт содержания животных Если да, то каких?"
          name="description"
        />
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          onFileUpload={setQuestionnaires}
          placeholder="Введите текст..."
          label="Есть ли у вас другие животные? Если да, то какие? Как относятся к другим животным?"
          name="description"
        />
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          onFileUpload={setQuestionnaires}
          placeholder="Введите текст..."
          label="Дополнительная информация"
          name="description"
        />
      </div>
      <div className={s.choose}>
        <BaseCheckbox
          content="Подписаться на рассылку"
          isChecked={subscribeToNewsletter}
          onChange={setSubscribeToNewsletter}
        />
        <BaseCheckbox
          content="Нажимая на кнопку я подтверждаю, что ознакомлен с условиями передачи персональных данных *"
          isChecked={personalDataAgreement}
          onChange={setPersonalDataAgreement}
        />
      </div>
      <div className={s.button}>
        <BaseButton variant="filled" color="primary" click={sendForm}>
          {isPending ? <ColorRing height="24px" width="148px" /> : 'Отправить анкету'}
        </BaseButton>
      </div>
    </div>
  );
};

export default DidntFindPetSite;
