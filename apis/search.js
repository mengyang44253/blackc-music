import myRequest from './common/request'


export const getSearchHot=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'search/hot'
  })
  return data
}


export const getSearchSuggest=async function(params){
  let data=await myRequest.request({
    method:'get',
    params,
    url:'search/suggest'
  })
  return data
}