import React from 'react';
import './App.scss';
import Base from './components/base';
import Header from './components/header';

function App() {
  return (
    <div className="container" style={{ textAlign: 'center'}}>
    <Header/>
    <Base/>
    </div>
  );
}

export default App;
