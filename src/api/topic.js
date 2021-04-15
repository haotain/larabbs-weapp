import {request} from '@/utils/request'

/**
 * 话题列表
 */
export function getTopics(data) {
  return request('topics', {
    data: data
  })
}
/**
 * 话题分类
 */
export function getCategories(data) {
  return request('categories')
}
