import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans } from 'lingui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Trans>Welcome to React</Trans></h2>
        </div>

          <p className="App-intro">
            <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
            </Trans>
          </p>

      </div>
    );
  }
}

export default App;
