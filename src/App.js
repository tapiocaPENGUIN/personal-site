import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing'
import InteractiveResume from './components/InteractiveResume';
import Footer from './components/Footer';
import './index.css';


class App extends Component {
  render() {
    return (
    <div>
    <Landing />

    <InteractiveResume />

    </div>



    );
  }
}

export default App;
