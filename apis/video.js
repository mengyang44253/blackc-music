import myRequest from './common/request'

export const getVideoTop=async function(params){//视频top列表
  let data=await myRequest.request({
    method:'get',
    params,
    url:'top/mv'
  })
  return data
}
