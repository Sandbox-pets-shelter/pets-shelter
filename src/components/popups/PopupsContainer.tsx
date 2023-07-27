import Cooperation from 'components/popups/forms/Cooperation';
import DidntFindPetSite from 'components/popups/forms/DidntFindPetSite';
import FindPetForm from 'components/popups/forms/FindPetForm';
import GiveAwayPet from 'components/popups/forms/GiveAwayPet';
import KeepPet from 'components/popups/forms/KeepPet';
import TakePetHome from 'components/popups/forms/TakePetHome';
import { useSelector } from 'react-redux';
import { RemoveScroll } from 'react-remove-scroll';
import { selectIsModalWindowOpen, selectModals } from 'store/modalStore/selectors';

import SuccessSendForm from './forms/SuccessSendForm';
import s from './styles.module.scss';

const PopupsContainer = () => {
  const modalsVisiblity = useSelector(selectModals);
  const isModalWindowOpen = useSelector(selectIsModalWindowOpen);

  if (isModalWindowOpen)
    return (
      <RemoveScroll enabled>
        <div className={s.popupsContainer}>
          <div className={s.popupsOverlay} />
          {modalsVisiblity.cooperationForm && <Cooperation />}
          {modalsVisiblity.successSendForm && <SuccessSendForm />}
          {modalsVisiblity.didntFindPetsForm && <DidntFindPetSite />}
          {modalsVisiblity.findPetForm && <FindPetForm />}
          {modalsVisiblity.giveAwayPetForm && <GiveAwayPet />}
          {modalsVisiblity.keepPetForm && <KeepPet />}
          {modalsVisiblity.takePetHomeForm && <TakePetHome />}
        </div>
      </RemoveScroll>
    );

  return null;
};

export default PopupsContainer;
