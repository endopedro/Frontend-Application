import { uiActions } from './slice'

export const clearNofitication = () => {
  return (dispatch) => {
    dispatch(uiActions.clearNotification())
  }
}
