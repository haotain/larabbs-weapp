import {authRequest} from '@/utils/request'

/**
 * 获取用户信息
 */
export function getCurrentUser(data) {
  return authRequest('user')
}

/**
 * 修改用户信息
 */
export function updateUser(data) {
  return authRequest('user', {
    method: 'put',
    data: data
  })
}

