import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export default class MenuHeader extends Component {
  render(){
    return (<Header className="header">
        <div style={{marginRight: 'auto'}} ></div>
        <h5>Pokedex</h5>
        <div style={{marginLeft: 'auto'}} >
          <a className="ant-btn ant-btn-link"  style={{color:'#FFF'}}>Login</a>
        </div>
      </Header>
    )
  }
}
