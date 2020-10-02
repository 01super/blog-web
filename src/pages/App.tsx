import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout, Menu } from 'antd';
import Home from '@/pages/Home';
import Editor from '@/pages/Editor';
import List from '@/pages/List';
import Detial from '@/pages/Detial';
import { PieChartOutlined, DesktopOutlined, FileAddOutlined } from '@ant-design/icons';

const Logo = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 48px;
  color: white;
`;

const { Content, Footer, Sider } = Layout;

export default (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
        >
          <Logo>个人博客</Logo>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <Link style={{ display: 'inline-block' }} to="/">
                主页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined type="desktop" />
              <Link style={{ display: 'inline-block' }} to="/editor">
                编辑
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <FileAddOutlined />
              <Link style={{ display: 'inline-block' }} to="/list">
                博客
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/editor">
                <Editor />
              </Route>
              <Route path="/list">
                <List />
              </Route>
              <Route path="/detial/:id">
                <Detial />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2019 - 01super -<a href="http://www.beian.miit.gov.cn">粤ICP备19026776号-1</a>
            <br />
            Powered by golang & react/antd
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
