import React, {Fragment} from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Explore from './Components/Explore'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/explore' component={Explore} />
      </Switch>
    </Fragment>
  );
}

export default App;
