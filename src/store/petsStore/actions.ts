import getPets from 'services/getPets';
import getStories from 'services/getStories';
import { Category, Character, Gender, Med, Wool } from 'types/IPet';

import { fetchAllPets, fetchOnePet, fetchStories } from './constants'

import { ThunkType } from './types';

export const fetchPetsData = (
  id: string,
  pageNumber?: number,
  size?: number,
  gender?: Gender,
  category?: Category,
  character?: Character,
  med?: Med,
  wool?: Wool
): ThunkType => {
  return async (dispatch) => {
    try {
      const response = await getPets(id, pageNumber, size, gender, category, character, med, wool);
      if (id === '') {
        dispatch(fetchAllPets(response));
      } else if (id !== '') {
        dispatch(fetchOnePet(response));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchStoriesData = (pageNumber: number, size?: number): ThunkType => {
  return async (dispatch) => {
    try {
      const response = await getStories(pageNumber, size);
      dispatch(fetchStories(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentPage = (page: number) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page
});