import { forms } from 'api/public';
import { API } from 'api/types';
import boyPet from 'assets/images/forms/boy-pet.svg';
import { BaseButton, BaseRadio } from 'components';
import BaseCheckbox from 'components/ui/BaseCheckbox';
import CloseIcon from 'components/ui/CloseIcon';
import InputField from 'components/ui/Input';
import { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { hideModalAction, showModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import s from './styles.module.scss';

const KeepPet = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [amountCats, setCatsAmount] = useState('');
  const [amountDogs, setDogsAmount] = useState('');

  const [petInHome, setPetInHome] = useState(false);
  const [healthCare, setHealthCare] = useState(false);
  const [buyPetFood, setBuyPetFood] = useState(false);
  const [buyEssentials, setBuyEssentials] = useState(false);

  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const closeForm = () => dispatch(hideModalAction(ModalWindows.KEEP_PET_FORM));
  const openSuccessSendFormModal = () => dispatch(showModalAction(ModalWindows.SUCCESS_SEND_FORM));

  const sendForm = async () => {
    const data: API.Public.Forms.PetsBoarding.Request = {
      firstName,
      lastName,
      age: Number(age),
      email,
      phoneNumber: '+71111111111',
      amountCats: Number(amountCats),
      amountDogs: Number(amountDogs),
      petInHome,
      healthCare,
      buyPetFood,
      buyEssentials,
      subscribeToNewsletter,
      personalDataAgreement
    };

    try {
      setIsPending(true);
      await forms.petsBoarding(data);
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
        <h1>Анкета для передержки</h1>
        <img src={boyPet} alt="boy-pet" />
      </div>
      <p className={s.formСontainer__contacts}>
        Заполните, пожалуйста, все поля нашей анкеты — это позволит <br />
        нам понять ваши условия для передержки.
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
        <InputField
          onChange={setCatsAmount}
          value={amountCats}
          placeholder="9"
          label="Сколько одновременно котиков вы готовы принять? *"
          type="number"
          name="Имя"
        />
        <InputField
          onChange={setDogsAmount}
          value={amountDogs}
          placeholder="9"
          label="Сколько одновременно собачек вы готовы принять? *"
          type="number"
          name="Имя"
        />
      </div>
      <div className={s.questions}>
        <p>Есть ли у вас домашние животные? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setPetInHome} name="radio" isChecked={petInHome} value="Да" />
          <BaseRadio change={setPetInHome} name="radio" isChecked={!petInHome} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Готовы ли вы, при необходимости, оказывать медицинскую помощь? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setHealthCare} name="radio" isChecked={healthCare} value="Да" />
          <BaseRadio change={setHealthCare} name="radio" isChecked={!healthCare} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Готовы ли вы самостоятельно приобретать корм для животного? *</p>
        <div className={s.questions__button}>
          <BaseRadio change={setBuyPetFood} name="radio" isChecked={buyPetFood} value="Да" />
          <BaseRadio change={setBuyPetFood} name="radio" isChecked={!buyPetFood} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>
          Готовы ли вы приобретать предметы первой необходимости для питомца (лоток, наполнитель, средства для гигиены)?
          *
        </p>
        <div className={s.questions__button}>
          <BaseRadio change={setBuyEssentials} name="radio" isChecked={buyEssentials} value="Да" />
          <BaseRadio change={setBuyEssentials} name="radio" isChecked={!buyEssentials} value="Нет" />
        </div>
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

export default KeepPet;
