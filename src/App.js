
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Ship from "./pages/Ship";
import About from "./pages/About";
import Ships from "./Ships";
import Footer from './components/Footer'

// import components
import {NavigationBar} from './components/NavigationBar'

// import CSS

import "./styles/global.css";
import "./styles/home.css";
import "./styles/search.css";
import "./styles/ship.css";
import "./styles/about.css";

const k_cruise_lines = 'cruise_lines'
const k_ship = "ships"


class App extends Component {
  state = { ship: []}
  render() {
    const { ships } = this.state;
    return (
      <>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:searchTerm?" render={() => <Search ships={ships} />} />
            <Route path="/ship/:id" component={Ship} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }

}

export default App;