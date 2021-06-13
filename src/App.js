import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import Header from './components/header/header.components';

class App extends React.Component {

  render() {
   return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </div>
   )
  }
}

export default App;
