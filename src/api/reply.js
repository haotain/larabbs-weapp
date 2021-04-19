import { request, authRequest } from '@/utils/request'

/**
 * 获取话题回复
 */
export function getReplies(topicId, data) {
    return request('topics/' + topicId + '/replies', {
        data: data
    })
}
/**
 * 获取某用户的回复
 */
export function getUserReplies(userId, data) {
    return request('users/' + userId + '/replies', {
        data: data
    })
}
/**
 * 回复话题
 */
export function createReply(topicId, data) {
    return authRequest('topics/' + topicId + '/replies', {
        method: 'post',
        data: data
    })
}
/**
 * 删除回复
 */
export function deleteReply(topicId, replyId) {
    return authRequest('topics/' + topicId + '/replies/' + replyId, {
        method: 'delete'
    })
}