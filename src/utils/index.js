// 时间戳转时间
export const changeTime = function(timestamp){
    const time = new Date(timestamp);
    return {
        Y: time.getFullYear(),
        M: time.getMonth()+1,
        D: time.getDate(),
        h: time.getHours(),
        mm: time.getMinutes(),
        s: time.getSeconds()
    }
}

// 数字转换
export const changeNum = function(num) {
    if (num < 10000) return num;
    num = num / 1000;
    if (num > 1000) return parseInt(num) + '万';
    else return num.toFixed(1) + '万';
}

// 解析视频信息
export const parseVideoInfo = function(info){
    const pic = info.pic;
    const title = info.title;
    const pubDate = (function(){
        const time = changeTime(info.pubdate * 1000);
        return `${time.M}-${time.D}`;
    })();
    const authorName = info.owner.name;
    const playNum = changeNum(info.stat.view);
    const likeNum = changeNum(info.stat.like);
    const danmaku = changeNum(info.stat.danmaku);
    const toVideoUrl = `/video/${info.bvid}`;
    const durationStr = (function(){
        const duration = info.duration;
        let mm = parseInt(duration / 60);
        let s = duration - mm * 60;
        if (mm < 10) mm = '0' + mm;
        if (s < 10) s = '0' + s;
        return mm + ':' + s;
    })();
    return {
        pic,
        title,
        pubDate,
        authorName,
        playNum,
        likeNum,
        danmaku,
        toVideoUrl,
        durationStr,
    }
}

export const setCookie = function(cname,cvalue,exTime){
    var d = new Date();
    d.setTime(d.getTime()+exTime);
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}