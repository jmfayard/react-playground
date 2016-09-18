import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';

var root = React.DOM.ul({className: 'my-list'},
    React.DOM.li(null, 'Text Content')
);



const Brand = (props) => (
    <Navbar.Header>
        <Navbar.Brand>
            <a href={props.url}>{props.text}</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
);


const Input = (props) => (
    <div className="form-group">
        <label >{props.label}</label>
        <input type={props.type} placeholder="text goes here" onChange={props.update} >

        </input>
    </div>
);

const App = () => (
    <div>
        <Navbar inverse fixedTop>
            <Grid>
                <Brand text="My-App" url="http://google.com">
                </Brand>
            </Grid>
        </Navbar>
        <Jumbotron>
            <Grid>
                <h1>Welcome to React</h1>
                <p>
                    <Button
                        bsStyle="success"
                        bsSize="large"
                        href="http://react-bootstrap.github.io/components.html"
                        target="_blank">
                        View React Bootstrap Docs
                    </Button>
                </p>
            </Grid>
        </Jumbotron>
        <div>
            <Input type="text" label="First Name"></Input>
            <Input type="number" label="Age"></Input>
        </div>
    </div>
);


export default App;
