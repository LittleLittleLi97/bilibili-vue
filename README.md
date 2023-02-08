## 介绍

vue3复现bilibili

一边学前端一边写

今天 你 码代码了吗？

2022.05.30更新
![](./2022-05-30.png)

## 已完成功能

- 登录
- 轮播图
- 分区视频推荐
- 相关推荐
- 视频搜索
- 热搜
- 搜索记录
- 用户收藏
- 历史记录

## 项目运行

首先git后端代码并运行：https://github.com/LittleLittleLi97/bilibili-nodejs
```
cd bilibili_nodejs
npm install
node app.js
```

然后切换到本项目路径
```
cd bilibili_vue
npm install
npm run serve
```

## 几项需要更新的点：
- 轮播图向左滑动时的方向
- 排行榜的触发范围（文字高度）
- 搜索建议+节流
- 搜索后页面回到顶部