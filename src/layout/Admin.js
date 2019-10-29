import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import routes from "../routes.js";

export default class DashBoard extends Component {

    render() {
        return (
            <div className="main">
                <Header />
                <Container>
                    <Switch>
                        {routes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                </Container>
            </div>
        );
    }
}