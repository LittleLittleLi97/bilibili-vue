import requests from "./request";

export const reqPlaceholder = ()=> requests({
    url:'/x/web-interface/search/default',
    method:'get',
});