import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import Detail from './components/Detail';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tit:"卖座电影",
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header tit={this.state.tit}/>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/detail/:fid" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
