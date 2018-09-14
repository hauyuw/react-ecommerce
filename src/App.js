import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import './App.css';
import Header from './Header/Header';
import Shop from './Shop/Shop';
import Review from './Review/Review';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <div>
            <Route exact path="/" component={Shop} />
            <Route path="/shop" component={Shop} />
            <Route path="/review" component={Review} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
