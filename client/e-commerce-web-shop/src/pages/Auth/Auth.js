import React from 'react';
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import './Auth.css'
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center container"
                style={{height: window.innerHeight - 84}}
            >
                <Card border="dark" className="auth-card p-5">
                    <h2 className="auth-text">{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
                    <Form className="d-flex flex-column form">
                        <Form.Control
                            className="mt-3 input"
                            placeholder="Email"
                        />
                        <Form.Control
                            className="mt-3 input"
                            placeholder="Password..."
                        />
                        <Button size="lg" variant="dark" className="align-self-center btn mt-4">
                            {isLogin ? "SIGN IN" : "SIGN UP"}
                        </Button>
                        {isLogin ?
                            <div className="account_text_container">
                                DON'T HAVE AN ACCOUNT? <Link to={REGISTRATION_ROUTE}>SIGN UP</Link>
                            </div>
                            :
                            <div className="account_text_container">
                            I HAVE AN ACCOUNT <Link to={LOGIN_ROUTE}>SIGN IN</Link>
                            </div>
                        }
                    </Form>
                </Card>

            </Container>
        </div>
    );
};

export default Auth;