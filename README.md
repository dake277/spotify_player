## React-Music


### 一、简介
基于React开发的调用 Spotify API 的 web播放器


### 二、技术栈
* React 16
* Redux Saga
* styled-components
* Express
* Spotify Web API

### 三、功能
* 展示自己的歌单、喜欢的音乐；
* 音乐播放功能（预览30s）；
* 创建歌单；
* Spotify登录功能（需要Spotify账号）；
* 后续功能开发中......


### 四、项目结构

```javascript
spotify-player
├── public           
│   ├── favicon.ico  
│   ├── index.html   
│   └── manifest.json
├── src              
│   ├── actions      
│   ├── components   
│   ├── fonts        
│   ├── images       
│   ├── reducers     
│   ├── sagas        
│   ├── App.js
│   ├── GobalStyled.js
│   ├── actionTypes.js
│   ├── api.js
│   ├── constants.js
│   ├── index.css
│   ├── index.js
├── .babelrc.json
├── README.md
├── package-lock.json
└── package.json

```
### 五、如何执行

#### 1、安装依赖
```javascript
npm install or yarn install
```
#### 2、执行
```javascript
npm start or yarn start
// npm run build(打包)
```
