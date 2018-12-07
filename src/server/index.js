/* eslint-disable */

import http from './request'

// 错误状态码
export const ERR_OK = '0'

// post
export const postReq = data => http.post('pulic', '/posturl', data)
// get
export const getReq = url => http.get('pulic', `/get?url=${url}`)
