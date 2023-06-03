import axios from 'axios'
import { Category, Character, Gender, Med, Wool } from 'types/IPet'

const url = 'http://158.160.4.84:9000/pet'

const getPets = async (page: number, size: number, gender: Gender, category: Category, character: Character, med: Med, wool: Wool) => {
    const response = await axios(url, {
        params: {
            page: page,
            size: size,
            gender: gender,
            category: category,
            character: character,
            med: med,
            wool: wool
        }
    })
    console.log(response.data)
    return response.data
}
export default getPets