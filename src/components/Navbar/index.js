import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../pages/About";
import Directory from "../../pages/Directory";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          TeamBase: Employee Directory
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/directory"
                className={
                  window.location.pathname === "/directory"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Directory
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        {/* Switch Pathes */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/Directory">
            <Directory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
