import myRequest from './common/request'

export const getHomeBanner=async function(params){
  //首页banner
  let data=await myRequest.request({
    method:'get',
    params,
    url:'banner'
  })
  return data
}

export const getHomeRanking=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'top/list'
  })
  return data
}

export const getSongMenu=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'top/playlist'
  })
  return data
}

export const getSongMenuDetail=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'playlist/detail/dynamic'
  })
  return data
}