import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { registerMicroApps, start } from "qiankun";
import { ConfigProvider } from 'antd';
import zhCN from "antd/locale/zh_CN";

registerMicroApps([
  {
    name: "react-micro-application", //子应用的名称，必须唯-。
    entry: "http://localhost:7788",//子应用项目本地运行地址
    container: "#container", // 子应用的容器(子应用嵌入到主项目id为container的容器)
    activeRule: "/react-micro1",// 子应用激活时的路由规则(子应用路由)
    props: { //向子应用传参
      state: false,
      userId: "userId",
      token: "18145EWDFDEdsefEFFfdDFf145454"
    }
  }
]);
start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
