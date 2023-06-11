import { Action, Dispatch } from 'redux'
import getPets from 'services/getPets'
import getStories from 'services/getStories'
import { Category, Character, Gender, IPet, Med, Wool } from 'types/IPet'

import { FetchOnePetAction, ThunkType, IIncomeObj, FetchAllPetsAction } from './types'

const fetchAllPets = (data: IIncomeObj): FetchAllPetsAction => {
  const uploadObj = {
    totalPage: data.total,
    pets: data.content
  }

  return {
    type: 'FETCH_DATA',
    payload: uploadObj
  }
}

const fetchOnePet = (data: IPet): FetchOnePetAction => {
  return {
    type: 'FETCH_PET_DATA',
    payload: data
  }
}

export const fetchData = (
  id: string,
  pageNumber?: number,
  size?: number,
  gender?: Gender,
  category?: Category,
  character?: Character,
  med?: Med,
  wool?: Wool): ThunkType => {
    return async (dispatch) => {
      try {
        const response = await getPets(id, pageNumber, size, gender, category, character, med, wool)

        if(id === '') {
          dispatch(fetchAllPets(response))}
        else if(id !== '') {
          dispatch(fetchOnePet(response))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

export const setCurrentPage = (page: number) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page
})

export const fetchStories = (
  pageNumber: number,
  size?: number): ThunkType => {
    return async (dispatch) => {
      try {
        const { content, total } = await getStories(pageNumber, size)
        dispatch({
          type: 'FETCH_STORIES',
          payload: {
            totalPage: total,
            stories: content
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }