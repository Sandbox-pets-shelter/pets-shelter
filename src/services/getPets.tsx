import axios from 'axios'
import { Category, Character, Gender, Med, Wool } from 'types/IPet'

const url = 'http://158.160.4.84:9000/pet'

const getPets = async (
    id: string,
    page: number | undefined,
    size: number | undefined,
    gender: Gender | undefined,
    category: Category | undefined,
    character: Character | undefined,
    med: Med | undefined,
    wool: Wool | undefined) => {
    const { data } = await axios(`${url}${id && '/'}${id}`, {
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
    return data
}
export default getPets