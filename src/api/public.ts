import { postRequest } from 'api';

import { API } from './types';

export const forms = {
  petsBoarding: (data: API.Public.Forms.PetsBoarding.Request) => {
    return postRequest('forms/petBoardings', { data });
  },
  homelessAnimals: (data: API.Public.Forms.HomelessAnimals.Request) => {
    return postRequest('forms/homelessAnimals', { data });
  },
  petOwnerProfiles: (data: API.Public.Forms.PetOwnerProfiles.Request) => {
    return postRequest('forms/petOwnerProfileForm', { data });
  },
  collaborationProposals: (data: API.Public.Forms.CollaborationProposals.Request) => {
    return postRequest('forms/collaborationProposals', { data });
  }
};
