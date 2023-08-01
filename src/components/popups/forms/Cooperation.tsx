import { forms } from 'api/public';
import { API } from 'api/types';
import cooperation from 'assets/images/forms/cooperation.svg';
import { BaseButton } from 'components';
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

const Cooperation = () => {
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [description, setDescription] = useState('');

  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [personalDataAgreement, setPersonalDataAgreement] = useState(false);

  const closeForm = () => dispatch(hideModalAction(ModalWindows.COOPERATION_FORM));
  const openSuccessSendFormModal = () => dispatch(showModalAction(ModalWindows.SUCCESS_SEND_FORM));

  const sendForm = async () => {
    const data: API.Public.Forms.CollaborationProposals.Request = {
      firstName,
      email,
      phoneNumber: '+71111111111',
      description,
      subscribeToNewsletter,
      personalDataAgreement
    };

    try {
      setIsPending(true);
      await forms.collaborationProposals(data);
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
      <h1>Предложения по сотрудничеству</h1>
      <p className={s.formСontainer__contacts}>Изложите, пожалуйста, ваши предложения в форме ниже</p>
      <div className={s.contactsWithPicture}>
        <div className={s.contactsWithPicture__contacts}>
          <InputField
            onChange={setFirstName}
            value={firstName}
            placeholder="Введите имя..."
            label="Имя *"
            type="text"
            name="Имя"
          />
          <InputField
            onChange={setEmail}
            value={email}
            placeholder="Введите почту..."
            label="Электронная почта *"
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
        <img src={cooperation} alt="cooperation" />
      </div>
      <div className={s.description}>
        <Textarea
          onChangeTextarea={setDescription}
          placeholder="Введите текст..."
          label="Ваши предложения по сотрудничеству:"
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
          {isPending ? <ColorRing height="24px" width="148px" /> : 'Отправить'}
        </BaseButton>
      </div>
    </div>
  );
};

export default Cooperation;
