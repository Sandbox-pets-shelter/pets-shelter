import successSendFormImg from 'assets/images/forms/SucessSendFormImg.svg';
import CloseIcon from 'components/ui/CloseIcon';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { hideModalAction } from 'store/modalStore/actions';
import { ModalWindows } from 'store/modalStore/reducers';

import s from './styles.module.scss';

const SuccessSendForm = () => {
  const dispatch = useDispatch();
  const closeForm = () => dispatch(hideModalAction(ModalWindows.SUCCESS_SEND_FORM));
  const { t } = useTranslation();

  return (
    <div className={s.formСontainer} style={{ maxWidth: '426px' }}>
      <CloseIcon variant={'onlyIcon'} onClick={closeForm} />
      <img className={s.successSendFormImg} src={successSendFormImg} alt="sucess-send" />
      <p className={s.successSendFormTitle}>{t('forms.successSendForm')}</p>
    </div>
  );
};

export default SuccessSendForm;
