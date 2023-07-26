import { ActionType } from '../types';

export enum ModalWindows {
  COOPERATION_FORM = 'cooperationForm',
  DIDNT_FIND_PETS_FORM = 'didntFindPetsForm',
  FIND_PET_FORM = 'findPetForm',
  GIVE_AWAY_PET_FORM = 'giveAwayPetForm',
  KEEP_PET_FORM = 'keepPetForm',
  TAKE_PET_HOME_FORM = 'takePetHomeForm'
}

export type ModalReducer = {
  [key in ModalWindows]: boolean;
};

const initialState: ModalReducer = Object.values(ModalWindows).reduce(
  (acc, modalName) => ({ ...acc, [modalName]: false }),
  {} as ModalReducer
);

const modalsReducer = (state = initialState, action: ActionType<ModalWindows>) => {
  switch (action.type) {
    case 'modal/show':
      return {
        ...state,
        [action.payload]: true
      };
    case 'modal/hide':
      return {
        ...state,
        [action.payload]: false
      };

    default:
      return state;
  }
};

export default modalsReducer;
