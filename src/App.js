import React, { useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Cards from './components/Home/Cards';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cards />
     </BrowserRouter>
    </div>
  );
}

