import $axios from './http'
import {
  Api
} from '.'
// 登录
export function oauth2_token(params) {
  const url = 'oauth2_token/v2'
  return $axios.post(url, params)
}
export function send_register_account_email(params) {
  const url = 'send_register_account_email/v2'
  return $axios.post(url, params)
}
// 获取商家类别
export function get_shop_category(params) {
  const url = 'get_shop_category/v2?shop_id=' + params.shop_id
  return $axios.get(url, params)
}
// 获取商家类别下边的商品列表
export function get_shop_category_info(params) {
  const url = 'get_shop_category_info/v2?category_id=' + params.category_id
  return $axios.get(url, params)
}
// 发送验证码
export function phone_send_verification(params) {
  const url = 'phone_send_verification/v2'
  return $axios.post(url, params)
}
// 设置密码
export function phone_register_or_reset(params) {
  const url = 'phone_register_or_reset/v2'
  return $axios.post(url, params)
}