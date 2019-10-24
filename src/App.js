import React from 'react';
import logo from './logo.svg';
import './App.css';

import Alert from './components/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Alert 
          position="bottom"
          text="An error occured!"
          type="danger"
        ></Alert>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
