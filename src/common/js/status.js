/**
 * 状态文件 用于分类和存放状态码
 */
 const env = process.env.NODE_ENV
 const imgPathMode = {
   production: '', // 生产文件路径
   development: '' // 开发文件路径
 }
 export const imgPath = env === 'production' ? imgPathMode.production : imgPathMode.development
