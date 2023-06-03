import { Dispatch } from 'redux'
import getPet from 'services/getPet'
import getPets from 'services/getPets'
import { Category, Character, Gender, Med, Wool } from 'types/IPet'

export const fetchData: any/* TODO */ = (pageNumber: number, size: number, gender: Gender, category: Category, character: Character, med: Med, wool: Wool) => {
    return async (dispatch: Dispatch) => {
      try {
        const { content, total } = await getPets(pageNumber, size, gender, category, character, med, wool)
        dispatch({
          type: 'FETCH_DATA',
          payload: {
            totalPage: total,
            pets: content
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

export const fetchPetData: any = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getPet(id)
      dispatch({
        type: 'FETCH_PET_DATA',
        payload: response
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const setCurrentPage = (page: number) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page
})