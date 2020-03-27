import React from 'react';
import { Switch, Route } from "react-router-dom"
import Welcome from "./components/welcome"
import Login from "./components/login"
import Register from "./components/register"
import './App.css';

function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> 
    </Switch>
    </>
  );
}

export default App;
