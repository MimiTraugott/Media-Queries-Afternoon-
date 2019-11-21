import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render (){
  return (
    <div className="App">
      <div>
      <div id='main-container'>
        <header id='header'>
          <logo id='logo'>START BOOTSTRAP</logo>
          <nav id='navbar'>
              <button id='navbutton'>SERVICES</button>
              <button id='navbutton'>PORTFOLIO</button>
              <button id='navbutton'>ABOUT</button>
              <button id='navbutton'>TEAM</button>
              <button id='navbutton'>CONTACT</button>
          </nav>
          <FontAwesomeIcon icon='bars' id='hamburger' onClick={this.handleToggle}/>
        </header>
        <div>
          <p id='centerwelcome'>Welcome To Our Studio</p>
          <p id='nice-to-meet'>IT'S NICE TO MEET YOU</p>
        </div>
        <div>
          <button id='tell-me-more'>TELL ME MORE</button>
        </div>
      </div>
      <div>
      <div>
          <div id='services'>SERVICES</div>
          <div>Lorem Ipsum dolor sit amet consectetur.</div>
        </div>
      </div>
      </div>
    </div>
  );
  }
}

