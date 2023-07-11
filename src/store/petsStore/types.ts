import { ThunkAction } from 'redux-thunk';
import { IPet } from 'types/IPet';
import { IStory } from 'types/IStory';

export interface IPetStoreAction {
  type: string;
  payload: IPetReducer;
}

export interface IPetReducer {
  currentPage: number;
  pets: IPet[];
  stories: IStory[];
  pet: IPet;
  totalPage: number;
}

export interface IPetStore {
  petsReducer: IPetReducer;
}

export interface IIncomeObj {
  totalPages: number;
  content: [];
}

export type FetchPetsPayload = {
  totalPage: number;
  pets: IPet[];
};

export type FetchStoriesPayload = {
  totalPage: number;
  stories: IStory[];
};

export type FetchAllPetsAction = {
  type: 'FETCH_DATA';
  payload: FetchPetsPayload;
};

export type FetchOnePetAction = {
  type: 'FETCH_PET_DATA';
  payload: IPet;
};

export type FetchStoriesAction = {
  type: 'FETCH_STORIES';
  payload: FetchStoriesPayload;
};

export type setCurrPageAction = {
  type: 'SET_CURRENT_PAGE';
  payload: number;
};

export type ActionsType = FetchAllPetsAction | FetchOnePetAction | FetchStoriesAction | setCurrPageAction;

export type ThunkType = ThunkAction<Promise<void>, IPetStore, unknown, ActionsType>;
