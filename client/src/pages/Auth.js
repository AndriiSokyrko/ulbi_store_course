import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className="d-flex justify-content-center align-item-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2>{isLogin ? 'Login' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Your email"></Form.Control>
                    <Form.Control className="mt-3" placeholder="Your password"></Form.Control>
                    <Row className="d-flex  justify-content-between pl-5 pr-5">

                            {isLogin ?
                                <div style={{width:"50%"}}>
                                     No account? <NavLink to={REGISTRATION_ROUTE} style={{display:"inline-block"}}>Registration</NavLink>
                                </div>
                                :
                                <div>
                                    Has account?<NavLink to={LOGIN_ROUTE} style={{display:"inline-block"}}>Login</NavLink>
                                </div>
                            }

                        {isLogin ?
                            <Button variant={"online-success"}>Login</Button>
                            :
                            <Button variant={"online-success"}>Registration</Button>

                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;