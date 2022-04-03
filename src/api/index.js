import requests from "./request";

export const reqPlaceholder = ()=>requests({
    url:'/x/web-interface/search/default',
    method:'get',
});

export const reqVideoList = (rid, num=5, page=1)=>requests({
    url:`/x/web-interface/dynamic/region?rid=${rid}&ps=${num}&pn=${page}`,
    method:'get',
})

export const reqVideoRank = (rid, day=3, original=0)=>requests({
    url:`/x/web-interface/ranking/region?day=${day}&original=${original}&rid=${rid}`,
    method:'get',
})