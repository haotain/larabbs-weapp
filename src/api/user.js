import {authRequest, uploadFile} from '@/utils/request'

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
/**
 * 上传用户头像
 */
export function updateAvatar(avatar) {
  return uploadFile('images', {
    method: 'post',
    name: 'image',
    formData: {
      type: 'avatar'
    },
    filePath: avatar
  })
}

