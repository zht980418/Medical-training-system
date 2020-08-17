import request from '@/utils/request'
import request2 from '@/utils/request2'
import Qs from 'qs'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function register(data) {
  return request2({
    url: '/MedicalServer/myServer',
    method: 'post',
    param: Qs.stringify(data),
    data: Qs.stringify(data)
  })
}
