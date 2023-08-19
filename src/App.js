import logo from './name-logo.png';
import './App.css';
import Lottie from 'lottie-react';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { animationUrl } from './Animation-1.mp4';

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
        <Player
          autoplay
          loop={false}
          src="https://lottie.host/6b8b3fa3-d60f-4a26-89e1-8e083206c3b0/JU6X8jFiZ2.json"
          style={{ height: '300px', width: '300px', flex: 1, alignItems: 'left' }}
          keepLastFrame= {true}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
          <h1>Home Grown</h1>
          {/*<img src={logo} {...logo} className="App-logo" alt="logo" flex={1} />*/}
          <p>Grow. Nurish. Sell.</p>
          <br></br>
        <a 
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started
        </a>

        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          flex={1}
        >
          Sign in
        </a>
      </header>
    </div>
  </Router>
  );
};
export default App;