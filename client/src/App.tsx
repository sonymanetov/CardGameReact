import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kletka from './components/Pole/Kletka/Kletka';
import Pole from './components/Pole/Pole';
import store from './components/store';
import { StoreContext } from 'storeon/react'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Pole />
    </StoreContext.Provider>
  );
}

export default App;
