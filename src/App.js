import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const func = () => fetch('https://jsonplaceholder.typicode.com/todos')
      .then(results => results.json())
      .then(data => console.log(data))

const App = () => {
  useEffect(() => {
    func()
  },[])
    return (
      <div className="App">
      </div>
    );
  }

export default App;
