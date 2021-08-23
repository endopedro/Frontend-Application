import { configActions } from './slice'
import api from '../../services/api'

const appId = process.env.APP_ID ? process.env.APP_ID : 1

export const fetchConfigData = () => {
  return async (dispatch) => {
    await api()
      .getConfig(appId)
      .then((response) =>
        dispatch(configActions.setConfig({ data: response.data }))
      )
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
