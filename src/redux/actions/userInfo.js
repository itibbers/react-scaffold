import { getUserInfo as getUserInfoApi } from '@/api'

export const GET_USER_INFO = 'userInfo/GET_USER_INFO'

export function getUserInfo() {
  return (dispatch) => {
    getUserInfoApi().then((res) => {
      dispatch({
        type: GET_USER_INFO,
        payload: res.data,
      })
    })
  }
}
