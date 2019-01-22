import React, { Component } from 'react';
import './App.css';
import styled,{css} from 'styled-components';

const MyButton = styled.div`
  color:green
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`
const TomatoButton = styled(MyButton)`
  color:tomato;
  border-color:tomato
`
class App extends Component {
  render() {
    return (
      <div>
        Hello
        <MyButton primary>Hello</MyButton>
        <MyButton>Hello</MyButton>
        <TomatoButton primary>Hello</TomatoButton>

      </div>
    );
  }
}

export default App;
