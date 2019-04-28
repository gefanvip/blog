import axios from 'axios'

// 封装了axios的get方法和post方法
export function get (url:string, params:any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export function post (url:string, params:any) {
    return new Promise((resolve, reject) => {
      axios.post(url, {
        params: params
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }


// export function post (url, data) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, qs.stringify(data), {// 没有qs后台会把整个数据当作key，value为空
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'// 以表单方式提交，axios默认是以json提交的
//       }
//     }
//     ).then(res => {
//       resolve(res.data)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }
