import axios from 'axios'

const url = 'http://158.160.4.84:9000/v1/pet?page='

const getPets = async (page: number, size: number) => ((await axios(url+page+'&size='+size)).data)

export default getPets