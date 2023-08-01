import { ModalWindows } from './reducers';

export const showModalAction = (modalName: ModalWindows) => {
  return {
    type: 'modal/show',
    payload: modalName
  };
};

export const hideModalAction = (modalName: ModalWindows) => {
  return {
    type: 'modal/hide',
    payload: modalName
  };
};
