/**
 * 通用文件
 * 用于存放通用函数
 */

// 深拷贝
export function objDeepClone (obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var newArr = []
      for (var i = 0; i < obj.length; i++) newArr.push(obj[i])
      return newArr
    } else {
      var newObj = {}
      for (var key in obj) {
        newObj[key] = this.objDeepClone(obj[key])
      }
      return newObj
    }
  } else {
    return obj
  }
}

export function deepClone (obj){
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if(obj[key] && typeof obj[key] === 'object'){
          objClone[key] = deepClone(obj[key])
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone;
}

// 浅拷贝
export function shallowCopy (obj) {
  let newObj = {}
  for (let key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}

// 深拷贝自定义对象
export function objWithTypeDeepClone (obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var newArr = []
      for (var i = 0; i < obj.length; i++) newArr.push(obj[i])
      return newArr
    } else {
      var newObj = Object.create(obj)
      for (var key in obj) {
        Object.defineProperty(newObj, key, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: objWithTypeDeepClone(obj[key])
        })
      }
      return newObj
    }
  } else {
    return obj
  }
}

export function sleep (time) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}
