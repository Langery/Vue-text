import http from './request'

export const sampleGraph = data => http.post('intranet', '/sample_graph', data)
