import myRequest from './common/request'

export const getVideoTop=async function(params){//视频top列表
  let data=await myRequest.request({
    method:'get',
    params,
    url:'top/mv'
  })
  return data
}

export const getMVDetail=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'mv/detail'
  })
  return data
}


export const getMVURL=async function (params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'mv/url'
  })
  return data
}

export const getRelateMV=async function (params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'related/allvideo'
  })
  return data
}