/* eslint-disable */

import http from './request'

// post
export const postReq = data => http.post('pulic', '/posturl', data)
// get
export const getReq = url => http.get('pulic', `/get?url=${url}`)
