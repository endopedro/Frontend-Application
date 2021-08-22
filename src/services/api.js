import axios from 'axios'

const api = axios.create({ baseURL: 'https://api-test.innoloft.com' })

const apiHelpers = () => ({
  getProduct: (id) => api.get(`product/${id}/`),
  updateProduct: (id, data) => api.put(`product/${id}/`, data),
  getTrl: () => api.get('trl/'),
  getConfig: (id) => api.get(`configuration/${id}/`),
})

export default apiHelpers
