import requests from "./request";

export const reqPlaceholder = ()=> requests({
    url:'/x/web-interface/search/default',
    method:'get',
});

export const reqVideoList = (rid, num=5, page=1)=> requests({
    url:`/x/web-interface/dynamic/region?rid=${rid}&ps=${num}&pn=${page}`,
    method:'get',
})