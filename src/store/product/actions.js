import { productActions } from './slice'
import { uiActions } from '../ui/slice'

import api from '../../services/api'

export const fetchProductData = () => {
  return async (dispatch) => {
    await api()
      .getProduct(6781)
      .then((response) => {
        dispatch(productActions.setProduct({ data: response.data }))
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            message: 'No Connection',
          })
        )
      })
  }
}

export const updateProductData = (data) => {
  return async (dispatch) => {
    await api()
      .updateProduct(6781, data)
      .then((response) => {
        dispatch(productActions.setProduct({ data: response.data }))
        dispatch(
          uiActions.showNotification({
            status: 'success',
            message: 'Data Updated',
          })
        )
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            message: 'No Connection',
          })
        )
      })
  }
}
