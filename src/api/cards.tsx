import axios from 'axios'

const getCards = async (url: string) => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getCards