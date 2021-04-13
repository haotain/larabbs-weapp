import {request} from '@/utils/request'

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}

export function getCaptcha(phone) {
  return request('captchas', {
    method: 'post',
    data: {
      phone: phone
    }
  })
}