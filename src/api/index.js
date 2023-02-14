import { requests, requestsApivc, requestsLogin, requestsNodejs, requestsSearch } from "./request";

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

export const reqCarouselInfo = ()=>requestsNodejs({
    url:'/info/carousel',
    method:'get',
})

// VideoPage
export const reqVideoInfo = (bvid)=>requests({
    url:`/x/web-interface/view?bvid=${bvid}`,
    method:'get',
});

export const reqVideoDesc = (bvid)=>requests({
    url:`/x/web-interface/archive/desc?bvid=${bvid}`,
    method:'get',
});

export const reqVideoRelated = (bvid)=>requests({
    url:`/x/web-interface/archive/related?bvid=${bvid}`,
    method:'get',
});

export const reqDanmakuProtobuf = (type, cid, segment_index)=>requests({
    url: `/x/v2/dm/web/seg.so?type=${type}&oid=${cid}&segment_index=${segment_index}`,
    method: 'get',
    responseType: 'arraybuffer',
})

export const reqDanmakuXML = (cid)=>requests({
    url: `/x/v1/dm/list.so?oid=${cid}`,
    method: 'get',
})

export const reqDanmaku = ()=>requestsNodejs({
    url:'/info/danmaku',
    method:'get',
});

// login
export const reqQRCode = ()=>requestsLogin({
    url:'/qrcode/getLoginUrl',
    method:'get',
})

export const reqQRCodeLoginState = (data)=>requestsLogin({
    url:'/qrcode/getLoginInfo',
    method:'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data,
})

// 退出登录
export const reqLogout = (data)=>requestsLogin({
    url:'/login/exit/v2',
    method:'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data,
})

// 用户登录信息
export const reqLoginInfo = ()=>requests({
    url:'/x/web-interface/nav',
    method:'get',
})

// 用户信息
export const reqUserInfo = ()=>requests({
    url:'/x/space/myinfo',
    method:'get',
})

export const reqUserCardInfo = (mid)=>requests({
    url:`/x/web-interface/card?mid=${mid}`,
    method:'get',
})

// 用户信息：MiniHeader 历史记录
export const reqGetHistory = ()=>requests({
    url:'/x/web-interface/history/cursor',
    method:'get',
})

// 用户信息：MiniHeader 视频动态
// https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${}&type_list=${}
export const reqVideoDynamic = (uid)=>requestsApivc({
    // url:`/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=${uid}&type_list=8,512,4097,4098,4099,4100,4101`,
    url:'/dynamic_draft/v1/dynamic_draft/get_draft_cnt',
    method:'get',
})

// 用户信息：收藏夹
export const reqUserCollect = (uid)=>requests({
    url:`/x/v3/fav/folder/created/list-all?up_mid=${uid}`,
    method:'get',
})

export const reqUserCollectDetail = (id)=>requests({
    url:`/x/v3/fav/resource/list?media_id=${id}&ps=10`,
    method:'get',
})

// 热搜
export const reqHotSearch = ()=>requestsSearch({
    url:'/main/hotword',
    method:'get',
});

// 默认搜索，返回各类型视频信息20条
export const reqSearch = (keyword)=>requests({
    url:`/x/web-interface/search/all/v2?keyword=${keyword}`,
    method:'get',
})

// 按类别搜索，用于点击页数后的刷新数据
export const reqSearchTypeForPage = (keyword, type, page)=>requests({
    url:`/x/web-interface/search/type?keyword=${keyword}&search_type=${type}&page=${page}`,
    method:'get',
})