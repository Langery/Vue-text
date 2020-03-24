import http from './request'

/**
 * setting status code or set keywords
 * 'intranet' from request.js . Definit the url-name
 */

// sample_graph
export const sampleGraph = data => http.post('intranet', '/sample_graph', data)

// multiHopExpand
export const multiExpand = data => http.post('intranet', '/multiHopExpand', data)
