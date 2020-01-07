import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Style.css";
import Page1 from "./Page1"

import Dashboard from "./Dashboard";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Card />

      <Page1 />
    </div>
  );
}

export default App;
