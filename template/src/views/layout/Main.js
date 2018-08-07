import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Test from '../test';
import Todo from '../todo';


export default class Main extends Component {

  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/test' component={Test}/>
        <Route path='/todo' component={Todo}/>
      </Switch>
    );
  }

}
