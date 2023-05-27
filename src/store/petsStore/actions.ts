import { Dispatch } from 'redux'
import getPets from 'services/getPets'

export const fetchData: any/* TODO */ = (pageNumber: number, size: number) => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await getPets(pageNumber, size)
        const { content, total } = response

        dispatch({
          type: 'FETCH_DATA',
          payload: {
            currentPage: pageNumber,
            totalPages: total,
            data: content
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }