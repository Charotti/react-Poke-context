import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import "./App.css";
export const UserContext = createContext();
export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,
  };
  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  );
}
