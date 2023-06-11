import axios from 'axios'

const url = 'http://158.160.4.84:9000/story'

const getStories = async (
    page: number,
    size: number | undefined) => {
    const { data } = await axios(url, {
        params: {
            page: page,
            size: size
        }
    })
    return data
}
export default getStories