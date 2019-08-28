import request from '../utils/request';
//可视化展示
export function getShow(params) {
  console.log(params)
  return request.put('/class/create', params)
}