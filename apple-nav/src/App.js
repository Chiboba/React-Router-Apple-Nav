import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import { Route } from 'react-router-dom';
import Data from './components/Data';

class App extends Component {

  render() {
    console.log(Data);
    return (
      <div className="App">
        <NavWrapper/>
        <Route path='/mac' render ={(props) => (
          <SubNav {...props} data={Data.Mac}/> 
        )}/>
        <Route path='/ipad' render ={(props) => (
          <SubNav {...props} data={Data.iPad}/> 
        )}/>
        <Route path='/iphone' render ={(props) => (
          <SubNav {...props} data={Data.iPhone}/> 
        )}/>
        <Route path='/watch' render ={(props) => (
          <SubNav {...props} data={Data.Watch}/> 
        )}/>
        <Route path='/tv' render ={(props) => (
          <SubNav {...props} data={Data.Mac}/> 
        )}/>
        <Route path='/music' render ={(props) => (
          <SubNav {...props} data={Data.Music}/> 
        )}/>

      </div>
    );
  }
}

export default App;
