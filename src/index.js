import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'

import AdminLayout from "./layout/Admin.js";

const hist = createBrowserHistory();


ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Redirect to="/admin/main" />
        </Switch>
    </Router>
, document.getElementById('root'));
