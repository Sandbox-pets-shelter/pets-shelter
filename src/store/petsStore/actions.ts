import { Dispatch } from 'redux'
import getPets from 'services/getPets'
import { Category, Character, Gender, Med, Wool } from 'types/IPet'

export const fetchData: any/* TODO */ = (pageNumber: number, size: number, gender: Gender, category: Category, character: Character, med: Med, wool: Wool) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await getPets(pageNumber, size, gender, category, character, med, wool)
        const { content, total } = response

        dispatch({
          type: 'FETCH_DATA',
          payload: {
            totalPages: total,
            data: content
          }
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