import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API2, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
  // headers: { 'Content-type': 'application/x-www-form-urlencoded' }
})

export default service
