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

// 数字前填充0，比如C中的%2d
export const paddingNum = function(num, length) {
    let len = (num + "").length;
    let diff = length - len + 1;
    if(diff > 0) {
        return Array(diff).join("0") + num;
    }
    return num;
}

// 解析视频信息
// 这里推荐视频和搜索视频的参数不一样，简直了
export const parseVideoInfo = function(info, img_params){
    var pic = info.pic;
    if (img_params) pic += img_params;
    const title = info.title;
    const pubDate = (function(){
        const time = changeTime(info.pubdate * 1000);
        return `${time.M}-${time.D}`;
    })();
    const authorName = info.author || info.owner.name;
    const playNum = changeNum(typeof(info.play)=='undefined'? info.stat.view:info.play);
    const likeNum = changeNum(typeof(info.like)=='undefined'? info.stat.like:info.like);
    const danmaku = changeNum(info.stat && info.stat.danmaku);
    const toVideoUrl = `/video/${info.bvid}`;
    const durationStr = (function(){
        const duration = info.duration;
        if (typeof(duration) === 'number') {
            let mm = parseInt(duration / 60);
            let s = duration - mm * 60;
            if (mm < 10) mm = '0' + mm;
            if (s < 10) s = '0' + s;
            return mm + ':' + s;
        }else {
            let timeArray = duration.split(':');
            if (timeArray[1].length < 2) timeArray[1] = '0' + timeArray[1];
            return timeArray.join(':');
        }
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

// cookie
export const setCookie = function(cname,cvalue,exTime){
    var d = new Date();
    d.setTime(d.getTime()+exTime);
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

export const getCookie = function(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}