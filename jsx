//jsx and html differnts


import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    let p = 'Md Tanjim is a great person'
    let h1 = 'I Love Programing'
    const h2 = 'Java Script is a very tricky language'
    let h3 = 'Tanjim'
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>{p}</p>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
          <p>{h3 ? h3 : 'No Data'}</p>
      </div>
    );
  }
}

export default App;
