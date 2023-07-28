import { AppStateType } from 'store/types';

export const selectModals = (state: AppStateType) => state.modalsReducer;

export const selectIsModalWindowOpen = (state: AppStateType) =>
  Object.values(state.modalsReducer).find((status) => !!status);

export const selectModalCooperationForm = (state: AppStateType) => state.modalsReducer.cooperationForm;
export const selectModalDidntFindPetForm = (state: AppStateType) => state.modalsReducer.didntFindPetsForm;
export const selectModalFindPetForm = (state: AppStateType) => state.modalsReducer.findPetForm;
export const selectModalGiveAwayPetForm = (state: AppStateType) => state.modalsReducer.giveAwayPetForm;
export const selectModalKeepPetForm = (state: AppStateType) => state.modalsReducer.keepPetForm;
export const selectModalTakePetHomeForm = (state: AppStateType) => state.modalsReducer.takePetHomeForm;
