import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
//import { animationUrl } from './constants';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      {/*
    <div className="App">
        <div style={{width: '100%', height: '100%', position: 'relative', transform: 'rotate(-180deg)', transformOrigin: '0 0', background: 'white'}}>
        <div style={{width: 430, height: 407, left: 430, top: 407, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#F5E54C'}} />
        <div style={{width: 182, height: 17, left: 368, top: 360, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>VEGA FOR HOME GROWERS</div>
        <div style={{width: 306, left: 368, top: 327, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', color: 'black', fontSize: 44, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Empowering individuals to grow their own vegetable garden</div>
        <div style={{width: 430, height: 525, left: -0, top: 407, position: 'absolute'}}>
            <div style={{width: 430, height: 525, left: 430, top: 525, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#D9D9D9'}} />
            <img style={{width: 1000, height: 667, left: 631, top: 525, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0'}} src="https://via.placeholder.com/1000x667" />
        </div>
  </div>*/
  }
    
          <header className="App-header">
              <h1>Girls in Tech 2023</h1>
              <Player
              autoplay
              loop
              src="https://lottie.host/346b67b0-1e4a-40e2-9782-ace9c64a363c/39w0Q1OxMe.json"
              style={{ height: '300px', width: '300px', color: 'green'}}
              keepLastFrame= {true}>
              <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
</p>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign in
        </a>
      </header>
    </div>
    </Router>
  );
};
export default App;