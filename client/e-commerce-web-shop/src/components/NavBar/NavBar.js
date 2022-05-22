import React, {useContext, useEffect} from 'react';
import {Context} from '../../index';
import '../../App.css';
import {Link, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Container, Nav, Navbar, FormControl, Dropdown, Badge} from 'react-bootstrap'
import {BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE} from "../../utils/consts";
import cl from './NavBar.module.css'
import {FaShoppingCart} from 'react-icons/fa'

const NavBar = observer(({amountItemsInCart, getTotalItemAmountInCart}) => {
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
                        <Navbar.Text className={cl.search}>
                            <FormControl
                                style={{width: 300, height: 25}}
                                placeholder="Search an item"
                            />
                        </Navbar.Text>
                        <Link className={cl.brandLogo} to={SHOP_ROUTE}>SHOES&BOOTS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to={SHOP_ROUTE} className='nav-link'>NEW</Link>
                                <Link to={SHOP_ROUTE} className="nav-link">SHOP</Link>
                            </Nav>
                            <Nav>
                                <Link to={BASKET_ROUTE} className="nav-link" style={{paddingRight: 2}}>
                                    CART {getTotalItemAmountInCart()}
                                </Link>
                                <FaShoppingCart color="rgba(255,255,255, 0.55)" fontSize="20px" style={{marginTop: 9, marginRight: 7}}/>
                                <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>ADMIN PANEL</Nav.Link>
                                <Nav.Link className="nav-link" onClick={() => logOut()}>SIGN OUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                : <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" fixed="top" className={cl.navbar}>
                    <Container>
                        <Navbar.Text className={cl.search}>
                            <FormControl
                                style={{width: 300, height: 25}}
                                placeholder="Search an item"
                            />
                        </Navbar.Text>
                        <Link className={cl.brandLogo} to={SHOP_ROUTE}>SHOES&BOOTS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="">NEW</Nav.Link>
                                <Nav.Link href="">SHOP</Nav.Link>
                            </Nav>
                            <Nav className={cl.navLinks}>
                                <Link to={BASKET_ROUTE} className="nav-link" style={{paddingRight: 2}}>
                                    CART {getTotalItemAmountInCart()}
                                </Link>
                                <FaShoppingCart color="rgba(255,255,255, 0.55)" fontSize="20px" style={{marginTop: 9, marginRight: 7}}/>
                                <Nav.Link href="" onClick={() => navigate(LOGIN_ROUTE)}>AUTHORIZATION</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </div>
    )
});

export default NavBar;