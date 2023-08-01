import { forms } from 'api/public';
import { API } from 'api/types';
import home from 'assets/images/forms/home.svg';
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

const GiveAwayPet = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [amountCats, setCatsAmount] = useState('');
  const [amountDogs, setDogsAmount] = useState('');

  const [petDomestic, setpetDomestic] = useState('');
  const [readyToBringPet, setReadyToBringPet] = useState('');

  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const closeForm = () => dispatch(hideModalAction(ModalWindows.GIVE_AWAY_PET_FORM));
  const openSuccessSendFormModal = () => dispatch(showModalAction(ModalWindows.SUCCESS_SEND_FORM));

  const sendForm = async () => {
    const data: API.Public.Forms.PetShelters.Request = {
      firstName,
      lastName,
      email,
      phoneNumber: '+71111111111',
      amountCats: Number(amountCats),
      amountDogs: Number(amountDogs),
      petDomestic: petDomestic === 'Да',
      readyToBringPet: readyToBringPet === 'Да',
      subscribeToNewsletter,
      personalDataAgreement
    };

    try {
      setIsPending(true);
      await forms.petShelters(data);
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
          onChange={setCatsAmount}
          value={amountCats}
          placeholder="100"
          label="Сколько котиков вы хотите отдать?*"
          type="number"
          name="Имя"
        />
        <InputField
          onChange={setDogsAmount}
          value={amountDogs}
          placeholder="100"
          label="Сколько собачек вы хотите отдать?*"
          type="number"
          name="Имя"
        />
      </div>
      <div className={s.questions}>
        <p>Животное, которое вы хотите отдать, является домашним?*</p>
        <div className={s.questions__button}>
          <BaseRadio change={setpetDomestic} name="radio" topping={petDomestic} value="Да" />
          <BaseRadio change={setpetDomestic} name="radio" topping={petDomestic} value="Нет" />
        </div>
      </div>
      <div className={s.questions}>
        <p>Готовы ли вы самостоятельно привезти питомца в приют?*</p>
        <div className={s.questions__button}>
          <BaseRadio change={setReadyToBringPet} name="radio" topping={readyToBringPet} value="Да" />
          <BaseRadio change={setReadyToBringPet} name="radio" topping={readyToBringPet} value="Нет" />
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

export default GiveAwayPet;
