import React, { Component } from 'react';
import Home from './pages/home/Home';
import { Navbar,Footer } from './AppComponents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;