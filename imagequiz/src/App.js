import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

import Home from "./components/Home.js";
import Login from "./components/Login.js";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
            <Footer />
        </HashRouter>
    );
}

export default App;
