## 关于protobuf

> 编辑于2023.02.14

dm.proto是bilibili弹幕的protobuf定义。

### 问题

nodejs可以直接使用protobuf.js和dm.proto对请求响应的数据解析。如：

```js
const root = protobuf.loadSync('dm.proto');
const reply = root.lookupType('dm.DmSegMobileReply');
axios.get('https://api.bilibili.com/x/v2/dm/web/seg.so?type=1&oid=1176840&segment_index=1', {responseType:'arraybuffer'}).then((res)=>{
  	// 注意这里需要写上responseType:'arraybuffer'
    const buffer = res.data;
    const message = reply.decode(buffer);
    console.log(message);
})
```

但是在前端中，使用上述代码会报错：

```
Error: illegal token '<' (dm.proto, line 1)
```

需要将proto编译为js文件。

### 编译

首先下载protoc：https://github.com/protocolbuffers/protobuf/releases/tag/v3.6.0，版本3.6.0，使用版本21报错。

然后解压，将文件夹bin中的protoc添加到环境变量。

在项目中安装google-protobuf：

```
npm install google-protobuf
```

执行指令：

```
protoc --js_out=import_style=commonjs,binary:. dm.proto
```

得到文件dm_pb.js。

### 使用

```js
import proto from './dm_pb.js';

const message = proto.DmSegMobileReply.deserializeBinary(danmakuData)
console.log(message)
```

### 参考：

- chatgpt和https://github.com/Croolch
- https://www.jb51.net/article/160808.htm
- https://blog.csdn.net/u010138825/article/details/85245995

## 关于danmaku切换分区

> 编辑于2023.02.24

正常播放切换分区会触发一个事件：timeupdate

seek到本分区会触发一个事件：seeked

而seek切换分区会触发两个事件：先触发timeupdate，后触发seeked

因此有以下流程：

```js
function requestDanmaku() {
  	if (已经有Data) return;
		return 请求Data.then(
      	解析Data并存储;
		  	Data加入Pool；
    );
}

function timeupdate() {
		if (seek) 渲染中的弹幕加入新分区;
  	恢复上一分区的Pool；
}

function seeked() {
		if (请求数据有返回值) { // seek到了新的分区
      	异步reset()；
    } else {
      	reset(); // 未切换分区
    }
}
```

