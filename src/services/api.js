import axios from 'axios'

const baseURL = process.env.API_URL
  ? process.env.API_URL
  : 'https://api-test.innoloft.com'

const api = axios.create({ baseURL: baseURL })

const apiHelpers = () => ({
  getProduct: (id) => api.get(`product/${id}/`),
  updateProduct: (id, data) => api.put(`product/${id}/`, data),
  getTrl: () => api.get('trl/'),
  getConfig: (id) => api.get(`configuration/${id}/`),
})

export default apiHelpers
