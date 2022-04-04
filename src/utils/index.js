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

// 播放数 以万为单位
export const changeNum = function(num) {
    if (num < 10000) return num;
    num = num / 1000;
    if (num > 1000) return parseInt(num) + '万';
    else return num.toFixed(2) + '万';
}