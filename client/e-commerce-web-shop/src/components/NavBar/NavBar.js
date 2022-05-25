import React, {useContext} from 'react';
import {Context} from '../../index';
import '../../App.css';
import {Link, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Container, Nav, Navbar} from 'react-bootstrap'
import {BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE} from "../../utils/consts";
import cl from './NavBar.module.css'
import {FaShoppingCart} from 'react-icons/fa'

const NavBar = observer(({getTotalItemAmountInCart}) => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div>
            {user.isAuth
                ? <Navbar
                    collapseOnSelect
                    expand="xxl"
                    bg="dark"
                    variant="dark"
                    fixed="top"
                >
                    <Container>
                        <Link className={cl.brandLogo} to={SHOP_ROUTE}>SHOES&BOOTS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={SHOP_ROUTE} className='nav-link' eventKey="0">NEW</Nav.Link>
                                <Nav.Link as={Link} to={SHOP_ROUTE} eventKey="1">SHOP</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={BASKET_ROUTE} className="nav-link" style={{paddingRight: 2}} eventKey="2">
                                    CART {getTotalItemAmountInCart()}
                                    <FaShoppingCart color="rgba(255,255,255, 0.55)" fontSize="20px" style={{padding: 2, marginBottom: 3}}/>
                                </Nav.Link>
                                <Nav.Link onClick={() => navigate(ADMIN_ROUTE)} eventKey="3">ADMIN PANEL</Nav.Link>
                                <Nav.Link className="nav-link" onClick={() => logOut()} eventKey="4">SIGN OUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                : <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" fixed="top" className={cl.navbar}>
                    <Container>
                        <Link className={cl.brandLogo} to={SHOP_ROUTE}>SHOES&BOOTS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={SHOP_ROUTE} className='nav-link' eventKey="0">NEW</Nav.Link>
                                <Nav.Link as={Link} to={SHOP_ROUTE} eventKey="1">SHOP</Nav.Link>
                            </Nav>
                            <Nav className={cl.navLinks}>
                                <Nav.Link as={Link} to={BASKET_ROUTE} className="nav-link" style={{paddingRight: 2}} eventKey="2">
                                    CART {getTotalItemAmountInCart()}
                                    <FaShoppingCart color="rgba(255,255,255, 0.55)" fontSize="20px" style={{padding: 2, marginBottom: 3}}/>
                                </Nav.Link>
                                <Nav.Link href="" onClick={() => navigate(LOGIN_ROUTE)} eventKey="3">AUTHORIZATION</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </div>
    )
});

export default NavBar;