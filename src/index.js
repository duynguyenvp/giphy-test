import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Trang chủ</Menu.Item>
        <Menu.Item key="2">Trang con</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 36px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 16 }}>
        <App />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} Created by Duy Nguyen</Footer>
  </Layout>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
