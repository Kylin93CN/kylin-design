# kylin-design
仿照antd，使用ts+react打造自己的组件库
## 使用
### 安装
`npm i kylin-design -S`
```javascript
import { Button } from 'kylin-design';
import 'kylin-design/dist/index.css';

function App() {
  return (
    <div className="App">
      <Button btnType="primary">bbbbb</Button>
    </div>
  );
}

export default App;

```
### 打包
` npm run build-ts`
### 运行
本地运行需要修改`src/index.tsx`文件
`npm start`

### 本地启动storybook
`npm run storybook`



```javascript

```

## 参与开发
```shell
git clone https://github.com/Kylin93CN/kylin-design.git && cd kylin-design
yarn
npm start
```