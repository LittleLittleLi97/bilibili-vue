import requests from "./request";

export const reqPlaceholder = ()=> requests({
    url:'https://api.bilibili.com/x/web-interface/search/default',
    method:'get',
});