import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail';
import Login from './components/Login';
import Join from './components/Join';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch> 

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route>
          <Join path="/join"/>
          </Route>

          <Route path="/detail/:id">
            <Detail />  
          </Route>
        

        </Switch>
      </Router>
    </div>
  );
}

export default App;