import axios from 'axios'
import {
  parseObjectToGetUrl
} from '../util'

var isPro = process.env.NODE_ENV === 'production'

const $axios = axios.create({
  // timeout: 10000,
  baseURL: 'https://jzk80vaqs7.execute-api.ap-northeast-1.amazonaws.com/dev_v2/',
})

$axios.interceptors.request.use(
  async (config) => {
      let token = await global.storage.load({
        key: 'token'
      }).catch(err => {
        return err
      })
      console.log(token)
      config.headers['authorization'] =
        (token || '')
      return config
    },
    (err) => {
      return Promise.reject(err)
    },
)

$axios.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return Promise.reject(err)
  },
)


export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    let newParams = params && parseObjectToGetUrl(params)
    $axios.get(url, newParams || '')
      .then(response => resolve(response), err => reject(err)).catch(err => reject(err))
  })
}

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    $axios.post(url, params)
      .then(response => resolve(response), err => reject(err)).catch(err => reject(err))
  })
}


export default $axios