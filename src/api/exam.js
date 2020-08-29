import request from '@/utils/request2'
import Qs from 'qs'

export function getExamList(data) {
    return request({
        url: '/MedicalServer/myServer',
        method: 'post',
        param: Qs.stringify(data),
        data: Qs.stringify(data)
    })
}

export function getExam(data) {
    return request({
        url: '/MedicalServer/myServer',
        method: 'post',
        param: Qs.stringify(data),
        data: Qs.stringify(data)
    })
}

export function saveAnswer(data) {
    return request({
        url: '/MedicalServer/myServer',
        method: 'post',
        param: Qs.stringify(data),
        data: Qs.stringify(data)
    })
}

export function getExamHistory(data) {
    return request({
        url: '/MedicalServer/myServer',
        method: 'post',
        param: Qs.stringify(data),
        data: Qs.stringify(data)
    })
}
