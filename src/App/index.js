import React, { Component } from 'react';
import './App.css';
import styled,{css} from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar></AppBar>
          <div>
          Hello
        </div>
      </AppLayout>
      
    );
  }
}

export default App;
