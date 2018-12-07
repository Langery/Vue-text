/*
* @Author: Langery
*/
// import ENV from './env';
const env = process.env.NODE_ENV
// 生产模式地址
const production = {
  publicPath: '/api'
}

// 开发模式地址
const development = {
  publicPath: 'http://api'
}

const location = env === 'production' ? production : development
export default location
