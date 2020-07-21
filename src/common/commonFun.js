export function loopFun (map, objMap) {
  objMap = []
  for (var i in map) {
    var item = {
      text: map[i],
      value: map[i]
    }
    objMap.push(item)
  }
  return objMap
}

export function findMapFun (sends, text) {
  let sendmap = sends
  let clickonce, clickitem
  sendmap.map((item) => {
    if (text === item.key) {
      clickonce = item.once
      clickitem = item
    }
  })
  return [clickonce, clickitem]
}

export function getTime () {
  let dateNow = new Date()
  let year = dateNow.getFullYear()
  let month = dateNow.getMonth() + 1
  let date = dateNow.getDate()
  let hour = dateNow.getHours()
  let min = dateNow.getMinutes()
  let sec = dateNow.getSeconds()
  let millSec = dateNow.getMilliseconds()
  function handleTime (date) {
    let fullDate = date < 10 ? `0${date}` : date
    return fullDate
  }
  function handleMilliseconds (date) {
    let fullDate = date >= 100 ? date : date >= 10 ? `0${date}` : `00${date}`
    return fullDate
  }
  let nowTime = `${year}-${handleTime(month)}-${handleTime(date)} ${handleTime(hour)}:${handleTime(min)}:${handleTime(sec)}:${handleMilliseconds(millSec)}`
  return nowTime
}

export function formatDateTime (inputTime) {
  var date = new Date(inputTime)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  var fnTime = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  var x = fnTime
  var time = new Date(x)
  var timeNum = 8
  time.setHours(time.getHours() + timeNum)
  return time
}

export function timeReturn (sendTime) {
  var d = new Date(sendTime)
  return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
}

export function daysReturn (dataS, dataE) {
  var arr = [dataS, dataE]
  var newArr = []
  arr.forEach(item => {
    var time = new Date(item)
    var backTime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
    var timeStamp = (Date.parse(new Date(backTime)) / 1000) / (3600 * 24)
    newArr.push(timeStamp)
  })
  return new Promise((resolve, reject) => {
    console.log(newArr)
    resolve(newArr)
  }).then(data => {
    console.log(data[1] - data[0])
    return data[1] - data[0] > 0 ? data : data
  })
}

export function postData (getUrl, data) {
  return new Promise((resolve, reject) => {
    const res = getUrl(data)
    resolve(res)
  }).then((data) => {
    console.log(data)
    return data.result_code === '200' ? data.data : data.result_message
  })
}

export function intranetPost (getUrl, data) {
  return new Promise((resolve, reject) => {
    const res = getUrl(data)
    resolve(res)
  }).then((data) => {
    // console.log(data)
    return Promise.resolve(data)
  })
}

export function getData (getUrl, ...data) {
  return new Promise((resolve, reject) => {
    const res = getUrl(...data)
    resolve(res)
  }).then((data) => {
    console.log(data)
    return data.result_code === '200' ? data.data : data.result_message
  })
}

export function deepQuery (tree, id) {
  var isGet = false;
  var retNode = null;
  function deepSearch(tree,id){
    for(var i = 0; i<tree.length; i++) {
      if(tree[i].children && tree[i].children.length>0) {
        deepSearch(tree[i].children,id);
      }
      if(id === tree[i].id || isGet) {
        isGet||(retNode = tree[i]);
        isGet = true;
        break;
      }
    }
  }
  deepSearch(tree,id);
  return retNode;
}
