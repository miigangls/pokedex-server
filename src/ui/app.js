import React from 'react';
import { Layout, Menu } from 'antd';
import { Switch, Route, Link  } from "react-router-dom";
import '../styles/app.css';
import Home from './pages/index';
import Login from './pages/login';
import NotFound from './pages/notFound';
const { Content, Header, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', overflowX:"hidden" }}>
      <Header className="header">
          <div style={{marginRight: 'auto'}} ></div>
          <h5>Pokedex</h5>
          <Menu style={{marginLeft: 'auto', height: 70,  backgroundColor: 'transparent'}} mode="horizontal">
            <Menu.Item className="nav-item"  key="login">
              <Link className='nav-link' to="/login"> Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
      <Layout>
          <Content className='container'>
            <Switch>
              <Route exact path="/" component={Home} ></Route>
              <Route path="/login" ><Login />  </Route>
              <Route component={NotFound} />
              </Switch>
          </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}> ©2020 Created by miigangls</Footer>
    </Layout>
    
  );
}

export default App;
