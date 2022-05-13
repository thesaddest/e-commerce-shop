import React, {useContext, useState} from 'react';
import {Card, Container, Form, Button, Row} from "react-bootstrap";
import './Auth.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authCheck = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.message)
        }

    }


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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3 input"
                            placeholder="Password..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        <Button
                            size="lg"
                            variant="dark"
                            className="align-self-center btn mt-4"
                            onClick={authCheck}
                        >
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
});

export default Auth;