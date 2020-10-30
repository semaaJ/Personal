import React, { useEffect } from 'react';
import Homepage from './components/Homepage';
import ReactGA from 'react-ga';
import './App.css';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-0BNQT4Q2CV');
    ReactGA.pageview('/');
  })

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
