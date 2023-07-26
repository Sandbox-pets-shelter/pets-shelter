import Cooperation from 'components/popups/forms/Cooperation';
import DidntFindPetSite from 'components/popups/forms/DidntFindPetSite';
import FindPetForm from 'components/popups/forms/FindPetForm';
import GiveAwayPet from 'components/popups/forms/GiveAwayPet';
import KeepPet from 'components/popups/forms/KeepPet';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectModals } from 'store/modalStore/selectors';

const ModalsContainer = () => {
  const modalsVisiblity = useSelector(selectModals);

  return (
    <Fragment>
      {modalsVisiblity.cooperationForm && <Cooperation />}
      {modalsVisiblity.didntFindPetsForm && <DidntFindPetSite />}
      {modalsVisiblity.findPetForm && <FindPetForm />}
      {modalsVisiblity.giveAwayPetForm && <GiveAwayPet />}
      {modalsVisiblity.findPetForm && <FindPetForm />}
      {modalsVisiblity.keepPetForm && <KeepPet />}
    </Fragment>
  );
};

export default ModalsContainer;
