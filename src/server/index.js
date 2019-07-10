import http from './request'

// sample_graph
export const sampleGraph = data => http.post('intranet', '/sample_graph', data)

// multiHopExpand
export const multiExpand = data => http.post('intranet', '/multiHopExpand', data)
