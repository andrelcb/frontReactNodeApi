import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import api from '../../services/api'


export default class RegisterProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            url: '',
        };

        this.registerProducts = this.registerProducts.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    registerProducts = async (e) => {
        e.preventDefault();

        const response = await api.post(`/products`, this.state);
        console.log(response);

    }

    render() {
        return (
            <Card>
                <Card.Header>Register Products</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.registerProducts}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="title" type="text" placeholder="Enter title" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" type="text" placeholder="text" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Url</Form.Label>
                                <Form.Control name="url" placeholder="Url" onChange={this.handleChange} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">Register</Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}