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

const TakePetHome = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [petDomestic, setPetDomestic] = useState('');

  const [cat, setCategoryCat] = useState(false);
  const [dog, setCategoryDog] = useState(false);

  const [allergy, setAllergy] = useState('');
  const [children, setChildren] = useState('');
  const [questionnaires, setQuestionnaires] = useState('');

  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const closeForm = () => dispatch(hideModalAction(ModalWindows.TAKE_PET_HOME_FORM));
  const openSuccessSendFormModal = () => dispatch(showModalAction(ModalWindows.SUCCESS_SEND_FORM));

  const sendForm = async () => {
    const data: API.Public.Forms.PetOwnerProfiles.Request = {
      firstName,
      lastName,
      age: Number(age),
      email,
      phoneNumber: '+71111111111',
      category: 'cats',
      petDomestic: petDomestic === 'Да',
      allergy: allergy === 'Да',
      children: children === 'Да',
      questionnaires,
      subscribeToNewsletter,
      personalDataAgreement
    };

    try {
      setIsPending(true);
      await forms.petOwnerProfiles(data);
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
        <h1>Забрать питомца домой</h1>
        <img src={girlPet} alt="girl-pet" />
      </div>
      <p className={s.formСontainer__contacts}>
        Заполните, пожалуйста, все поля нашей анкеты — это позволит <br /> нам понять ваши условия для приема питомца в
        семью.
        <br />
        Мы отдаем всех питомцев по итогам собеседования.
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
          onChange={setAge}
          value={age}
          placeholder="9"
          label="Сколько вам полных лет? *"
          type="number"
          name="Имя"
        />
      </div>
      <div className={s.questions}>
        <p>Есть ли у вас домашние животные? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setPetDomestic} name="radio" topping={petDomestic} value="Да" />
          <BaseRadio change={setPetDomestic} name="radio" topping={petDomestic} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Если да, то какие животные?</p>
        <div className={s.questions__button}>
          <BaseCheckbox content="Кошка/ки" isChecked={cat} onChange={setCategoryCat} />
          <BaseCheckbox content="Собака/ки" isChecked={dog} onChange={setCategoryDog} />
        </div>
      </div>
      <div className={s.descriptionTwo}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          placeholder="Введите текст..."
          label="Есть ли у вас опыт содержания животных? Если да, то каких?"
          name="description"
          smilePickerEnable
        />
      </div>
      <div className={s.questions}>
        <p>Есть ли у вас или у ваших близких аллергия на шерсть? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setAllergy} name="radio" topping={allergy} value="Да" />
          <BaseRadio change={setAllergy} name="radio" topping={allergy} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Есть ли у вас дома дети до 10 лет? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setChildren} name="radio" topping={children} value="Да" />
          <BaseRadio change={setChildren} name="radio" topping={children} value="Нет" />
        </div>
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setQuestionnaires}
          placeholder="Введите текст..."
          label="Дополнительная информация"
          name="description"
          smilePickerEnable
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

export default TakePetHome;
