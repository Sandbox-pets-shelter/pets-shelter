import axios from 'axios'

const url = 'http://158.160.4.84:9000/pet'

const getPet = async (id: number) => {
    const response = await axios(url + '/' + id)
    return response.data
}
export default getPet