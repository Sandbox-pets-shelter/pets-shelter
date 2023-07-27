import { postRequest } from 'api';

import { API } from './types';

export const forms = {
  petsBoarding: (data: API.Public.Forms.PetsBoarding.Request) => {
    return postRequest('forms/petBoardings', { data });
  }
};
