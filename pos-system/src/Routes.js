import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";


import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LoginScreen} />
                </Switch>
            </Router>
        );
    }
}