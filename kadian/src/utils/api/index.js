import request from '@/utils/request.js'
import qs from 'qs'
export function index(data){
  return request({
    url: 'api/video/getnavigation',
    method: 'post',
    data:qs.stringify(data)
  })
}