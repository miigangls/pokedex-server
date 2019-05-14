import React, { Component } from 'react';
import styled from 'styled-components';


export default class Navbar extends Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a href=""
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >Pokedex</a>
        </nav>
      </div>
    )
  }
}
