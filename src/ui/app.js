import React from 'react';
import { Layout, Menu } from 'antd';
import { Switch, Route, Link  } from "react-router-dom";
import '../styles/app.css';
import Home from './pages/index';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFound';
const { Content, Header, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', overflowX:"hidden" }}>
      <Header className="header">
          <div style={{marginRight: 'auto'}} ></div>
          <div style={{marginRight: 'auto'}} ></div>
          <Link className='nav-link' to="/"><h5>Pokedex</h5></Link>
          <Menu style={{marginLeft: 'auto', height: 70,  backgroundColor: 'transparent'}} mode="horizontal">
            <Menu.Item className="nav-item"  key="registro">
              <Link className='nav-link' to="/register">Registro</Link>
            </Menu.Item>
            <Menu.Item className="nav-item"  key="ingresar">
              <Link className='nav-link' to="/login">Ingresar</Link>
            </Menu.Item>
          </Menu>
        </Header>
      <Layout>
          <Content className='container'>
            <Switch>
              <Route exact path="/" component={Home} ></Route>
              <Route path="/login" ><Login />  </Route>
              <Route path="/register" ><Register />  </Route>
              <Route component={NotFound} />
            </Switch>
          </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}> ©2020 Created by miigangls</Footer>
    </Layout>
    
  );
}

export default App;
