import React, {useContext, useEffect, useState} from 'react';
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
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const authCheck = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            console.log(e.response.message)
        }

    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrent email')
        } else {
            setEmailError('')
        }
    }

    const passwordHander = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 200){
            setPasswordError('Your should be at least 4 characters long and less than 200 symbols')
            if(!e.target.value) {
                setPasswordError('Password can not be empty')
            }
        } else {
            setPasswordError('')
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center container auth-container"
            >
                <Card border="dark" className="auth-card p-5">
                    <h2 className="auth-text">{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
                    <Form className="d-flex flex-column form">
                        <Form.Control
                            onBlur={e => blurHandler(e)}
                            name="email"
                            className="mt-3 input"
                            placeholder="Email..."
                            value={email}
                            onChange={e => emailHandler(e)}
                        />
                        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                        <Form.Control
                            onBlur={e => blurHandler(e)}
                            name="password"
                            className="mt-3 input"
                            placeholder="Password..."
                            value={password}
                            onChange={e => passwordHander(e)}
                            type="password"
                        />
                        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                        <Button
                            disabled={!formValid}
                            size="lg"
                            variant="dark"
                            className="align-self-center btn mt-4"
                            onClick={authCheck}
                            style={{}}
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