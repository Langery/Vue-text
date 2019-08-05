const env = process.env.NODE_ENV

const production = {
  // intranetPath: 'http://10.61.2.206:8000'
  // http://wentropy.com:8000
  intranetPath: 'http://wentropy.com:8000'
}

const development = {
  // intranetPath: 'http://10.61.2.206:8000'
  intranetPath: 'http://wentropy.com:8000'
}

const location = env === 'production' ? production : development
export default location
