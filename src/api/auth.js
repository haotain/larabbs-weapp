import {request} from '@/utils/request'

export function login(data) {
  return request('weapp/authorizations', {
    method: 'post',
    data: data
  })
}

/**
 * 获取验证码
 */
export function getCaptcha(phone) {
  return request('captchas', {
    method: 'post',
    data: {
      phone: phone
    }
  })
}
/**
 * 获取手机验证码
 */
export function getVerificationCode(key, code) {
  return request('verificationCodes', {
    method: 'post',
    data: {
      captcha_key: key,
      captcha_code: code
    }
  })
}
/**
 * 注册接口
 */
export function register(data) {
  return request('weapp/users', {
    method: 'post',
    data: data
  })
}