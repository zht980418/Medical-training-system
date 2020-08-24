import request from '@/utils/request2'
import Qs from 'qs'


export function register(data) {
    return request({
        url: '/MedicalServer/myServer',
        method: 'post',
        param: Qs.stringify(data),
        data: Qs.stringify(data)
    })
}
