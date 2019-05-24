import axios from 'axios'

export default axios.create({
  baseURL: 'https://reactquiz-8bdf5.firebaseio.com/'
})