import { IPet } from 'types/IPet';

import { IIncomeObj, FetchAllPetsAction, FetchOnePetAction, FetchStoriesAction } from './types';

export const fetchAllPets = (data: IIncomeObj): FetchAllPetsAction => {
    const uploadObj = {
        totalPage: data.total,
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
        totalPage: data.total,
        stories: data.content
    };

    return {
        type: 'FETCH_STORIES',
        payload: uploadObj
    }
}