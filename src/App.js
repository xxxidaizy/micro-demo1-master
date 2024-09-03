import React from 'react';
import { Layout, Menu } from 'antd';
import { VideoCameraOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom";
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="demo-logo">
          <NavLink style={{ color: '#fff', marginRight: 30 }} to="/">micor-app-demo</NavLink>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1 }}
          items={[
            {
              key: "1",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/react-micro1">react 应用1</NavLink>
            },{
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/react-micro2">react 应用2</NavLink>
            },{
              key: "3",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/react-micro3">vue 应用</NavLink>
            }
          ]}
        />
      </Header >
      <Content
        style={{ height: 'calc(100vh - 128px)', backgroundColor: '#282c34', color: '#fff' }}
        id="container"
      >
        <h1>主应用显示容器</h1 >
      </Content >
      <Footer style={{ textAlign: 'center' }}>Ant Design Created by Ant UED</Footer >
    </Layout >
  )
}

export default App;
