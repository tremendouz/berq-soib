import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/simple-app-bar/SimpleAppBar';
import InfoCard from './components/info-card/InfoCard';
import TabContainer from './components/tab-container/TabContainer';

class App extends Component {
  render() {
    return (
      <div>
      <SimpleAppBar></SimpleAppBar>
      <InfoCard></InfoCard>
      <TabContainer></TabContainer>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <h1>ELO 420</h1>
      // </div>
    );
  }
}

export default App;
