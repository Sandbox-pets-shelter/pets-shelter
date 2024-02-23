import { IPet } from 'types/IPet';

import { IIncomeObj, FetchAllPetsAction, FetchOnePetAction, FetchStoriesAction } from './types';

export const fetchAllPets = (data: IIncomeObj): FetchAllPetsAction => {
  const uploadObj = {
    totalPage: data.totalPages,
    pets: data.content
  };

  return {
    type: 'FETCH_DATA',
    payload: uploadObj
  };
};

export const fetchOnePet = (data: IPet): FetchOnePetAction => {
  return {
    type: 'FETCH_PET_DATA',
    payload: data
  };
};

export const fetchStories = (data: IIncomeObj): FetchStoriesAction => {
  const uploadObj = {
    totalPage: data.totalPages,
    stories: data.content
  };

  return {
    type: 'FETCH_STORIES',
    payload: uploadObj
  };
};

export const setPage = (page: number) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page
  };
};
