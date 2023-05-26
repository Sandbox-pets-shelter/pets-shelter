import axios from 'axios'

const getPets = async (url: string) => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getPets