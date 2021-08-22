import { trlActions } from './slice'
import api from '../../services/api'

export const fetchTrlData = () => {
  return async (dispatch) => {
    await api()
      .getTrl()
      .then((response) => dispatch(trlActions.setTrl({ data: response.data })))
      .catch((error) => console.log(error))
  }
}