import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom';

import './styles.css'

const Header = () => (
    <Navbar id="main-header" variant="dark">
        <Navbar.Brand><NavLink to={`/admin/main`}>Products </NavLink></Navbar.Brand>
        <Nav className="mr-auto">
            <NavLink to={`/admin/register-products`}>Register Products</NavLink>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
);

export default Header;