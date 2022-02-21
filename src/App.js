import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/login">
              Login
            </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
