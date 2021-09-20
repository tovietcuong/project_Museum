import React, { Component } from 'react';
import './App.css';
import Sections from './Sections'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/sections"/>
                )}/>
                 <Route exact path='/sections' component={Sections} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
