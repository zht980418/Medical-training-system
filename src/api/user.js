import request from '@/utils/request2'
import Qs from 'qs'

export function login(data) {
  return request({
    url: '/MedicalServer/myServer',
    method: 'post',
    param: Qs.stringify(data),
    data: Qs.stringify(data)
  })
}

export function getInfo(data) {
  return request({
    url: '/MedicalServer/myServer',
    method: 'post',
    param: Qs.stringify(data),
    data: Qs.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
