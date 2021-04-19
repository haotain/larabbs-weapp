import {authRequest} from '@/utils/request'

/**
 * 获取未读消息
 */
export function getNotificationStats(...params) {
  return authRequest('notifications/stats', ...params)
}

/**
 * 消息列表
 */
export function getNotifications() {
  return authRequest('notifications')
}
