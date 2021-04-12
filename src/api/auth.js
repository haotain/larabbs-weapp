import {request, authRequest} from '@/utils/request'

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}
export function refresh(token) {
  return request('authorizations/current', {
    method: 'put',
    htader: {
      'Authorization': 'Bearer ' + token
    }
  })
}

export function logout(token) {
  return request('authorizations/current', {
    method: 'delete',
    header: {
      'Authorization': 'Bearer ' + token
    }
  })
}