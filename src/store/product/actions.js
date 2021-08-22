import { productActions } from './slice'
import api from '../../services/api'

export const fetchProductData = () => {
  return async (dispatch) => {
    await api()
      .getProduct(6781)
      .then((response) =>
        dispatch(productActions.setProduct({ data: response.data }))
      )
      .catch((error) => console.log(error))
  }
}
