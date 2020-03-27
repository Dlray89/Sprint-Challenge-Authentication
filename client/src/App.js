import React from 'react';
import { Switch, Route } from "react-router-dom"
import Welcome from "./components/welcome"
import Login from "./components/login"
import Register from "./components/register"
import PrivateRouter from "./utils/PrivateRoute"
import Jokes from "./components/jokes"
import './App.css';

function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> 
        <PrivateRouter exact path="/dashboard" component={Jokes} />
    </Switch>
    </>
  );
}

export default App;
