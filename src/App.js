import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoomPage from './pages/SingleRoomPage';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoomPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
