import React from "react";
import Button from "./components/Botton/button";
import './styles/index.scss';
import './App.css'

function App() {
  return (
    <div className="App">
      <h3>类型</h3>
      <Button btnType="primary">Primary</Button>
      <Button btnType="default">Default</Button>
      <Button btnType="link" href="https://www.baidu.com/">Link</Button>
      <div style={{ background: 'rgb(190, 200, 200)',display: 'inline-block', width: 120 }}>
        <Button btnType="ghost">Default</Button>
      </div>
      <h3>大小</h3>
      <Button btnType="primary" size="sm">小Primary</Button>
      <Button btnType="default" size="lg">大Default</Button>
      <Button btnType="link" size="sm" href="https://www.baidu.com/">小Link</Button>
      <div style={{ background: 'rgb(190, 200, 200)',display: 'inline-block', width: 120 }}>
        <Button size="lg" btnType="ghost">大Default</Button>
      </div>
      <h3>状态</h3>
      <Button btnType="primary" disabled>Primary</Button>
      <Button btnType="default" disabled>Default</Button>
      <Button disabled btnType="link" href="https://www.baidu.com/">Link</Button>
      <div style={{ background: 'rgb(190, 200, 200)',display: 'inline-block', width: 120 }}>
        <Button disabled btnType="ghost">Default</Button>
      </div>
    </div>
  );
}

export default App;
