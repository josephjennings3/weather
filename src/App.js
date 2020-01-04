import React from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

function App() {
  return (
    <div className="App">
      <Titles />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
