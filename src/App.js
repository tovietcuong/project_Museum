// import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import React,{ Component} from 'react';
import Customers from './component/Customers';
import {  Switch, Router, Route } from 'react-router-dom';
class App extends Component{
  render(){
    console.log("Host URL"+process.env.PUBLIC_URL);
    return(
      <Router basename = {process.env.PUBLIC_URL}>
        {/* <div className ="App">
          <header className = "App-header">
            
          </header>
        </div> */}
        <Switch>
          <Route exact path = "/" render = {() =>(
            // <Redirect to="/customerlist"/>
            <div>adnanlks</div>
          )}/>
          <Route exact path ='/customerlist' component ={Customers}/>
        </Switch>
      </Router>
    );
  }
}
// import { Form } from 'reactstrap';

export default App;
