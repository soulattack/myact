# act01

> my pro for act

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue 自制demo，页面UI仿照a站和B站, 主框架为vue axios vue-router vux，
数据来源有本地php服务器模拟的数据（php页面发送json格式数据）和本地静态json文件(资源中包含php文件),
（比如一般几年内不会有变动的省市县json打包在本地 节省资源，但测试时候可那个有跨域问题 特别是谷歌浏览器反倒更坑）。
页面切换动画可以再优化 。
