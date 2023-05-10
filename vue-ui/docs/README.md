# 起步

### 安装组件库

```bash
npm i sw-ui # or: yarn add sw-ui
```

### 应用组建库

> 在 main.js 中引入组件库

```js
// 全部引入
import "sw-ui/dist/css/index.css";
import SWUI from "sw-ui";
Vue.use(SWUI);

// 按需引入
import "sw-ui/dist/css/sw-button.css";
import { swButton } from "sw-ui";
Vue.use(swButton);
```
