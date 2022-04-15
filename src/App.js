import React, { useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
     </BrowserRouter>
    </div>
  );
}

