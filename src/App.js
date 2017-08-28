import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsList from './components/ItemsList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>Simple TODO</h3>
        </div>
        <div className='Items-list-container'>
          <ItemsList/>
        </div>
      </div>
    );
  }
}

export default App;
