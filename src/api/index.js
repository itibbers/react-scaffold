import request from '@/utils/request'

export const getUserInfo = () => {
  return request({
    url: '/api/user',
    method: 'get',
  })
}

export const getMenus = () => {
  return request({
    url: '/api/menus',
    method: 'get',
  })
}

export const getMenuInfo = (menuId) => {
  return request({
    url: '/api/menu',
    method: 'get',
    params: {
      id: menuId,
    },
  })
}

export const getData = (menuId, conds) => {
  return request({
    url: '/api/query/' + menuId,
    method: 'get',
    params: conds,
  })
}
