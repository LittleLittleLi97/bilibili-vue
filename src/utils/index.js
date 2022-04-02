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