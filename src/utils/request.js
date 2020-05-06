import axios from 'axios'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5 * 1000,
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers["X-Token"] = getToken();
//     }
//     return config;
//   },
//   error => {
//     // do something with request error
//     console.log(error); // for debug
//     return Promise.reject(error);
//   }
// );

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data

    // if (res.errno !== 0) {
    //   console.error(res.msg)
    //   return Promise.reject(
    //     res.msg || res.errno || 'Check response data format.'
    //   )
    // } else {
    return res
    // }
  },
  (error) => {
    console.error('Network Error', error)
    return Promise.reject(error)
  }
)

export default service
