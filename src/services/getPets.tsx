import axios from 'axios'
import { Category, Character, Gender, Med, Wool } from 'types/IPet'

const url = 'http://158.160.4.84:9000/pet'

const getPets = async (page: number, size: number, gender: Gender, category: Category, character: Character, med: Med, wool: Wool) => {
    console.log(size)
    return (
        (await axios(url, {
            params: {
                page: page,
                size: size ? size : 10,
                gender: gender ? gender : '',
                category: category ? category : '',
                character: character ? character : '',
                med: med ? med : '',
                wool: wool ? wool : ''
            }
        })).data
    )
}
export default getPets