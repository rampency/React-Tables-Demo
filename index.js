import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import EquityAwards from './components/EquityAwards';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EquityAwards />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
