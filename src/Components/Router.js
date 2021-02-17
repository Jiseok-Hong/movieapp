import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home.js";
import Detail from "Routes/Detail.js";
import Search from "Routes/Search.js";
import Tv from "Routes/Tv.js";


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={Tv} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    </Router>
);