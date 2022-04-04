import { requests, requestsSearch } from "./request";

// HomePage
export const reqPlaceholder = ()=>requests({
    url:'/x/web-interface/search/default',
    method:'get',
});

export const reqVideoList = (rid, num=5, page=1)=>requests({
    url:`/x/web-interface/dynamic/region?rid=${rid}&ps=${num}&pn=${page}`,
    method:'get',
});

export const reqVideoRank = (rid, day=3, original=0)=>requests({
    url:`/x/web-interface/ranking/region?day=${day}&original=${original}&rid=${rid}`,
    method:'get',
});

// 热搜
export const reqHotSearch = ()=>requestsSearch({
    url:'http://s.search.bilibili.com/main/hotword',
    method:'get',
});

// VideoPage
export const reqVideoInfo = (bvid)=>requests({
    url:`/x/web-interface/view?bvid=${bvid}`,
    method:'get',
});

export const reqVideoDesc = (bvid)=>requests({
    url:`/x/web-interface/archive/desc?bvid=${bvid}`,
    method:'get',
})

export const reqVideoRelated = (bvid)=>requests({
    url:`/x/web-interface/archive/related?bvid=${bvid}`,
    method:'get',
})