import React, {useContext, useEffect} from 'react';
import {Context} from '../../index';
import '../../App.css';
import {Link, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Container, Nav, Navbar} from 'react-bootstrap'
import {BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE} from "../../utils/consts";
import cl from './NavBar.module.css'

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
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
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to={SHOP_ROUTE} className='nav-link'>NEW</Link>
                                <Link to={SHOP_ROUTE} className="nav-link">SHOP</Link>
                            </Nav>
                            <Nav>
                                <Link to={BASKET_ROUTE} className="nav-link">CART</Link>
                                <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>ADMIN PANEL</Nav.Link>
                                <Nav.Link className="nav-link" onClick={() => logOut()}>SIGN OUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                : <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" fixed="top" className={cl.navbar}>
                    <Container>
                        <Link className={cl.brandLogo} to={SHOP_ROUTE}>SHOES&BOOTS</Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="">NEW</Nav.Link>
                                <Nav.Link href="">SHOP</Nav.Link>
                            </Nav>
                            <Nav className={cl.navLinks}>
                                <Nav.Link href="" onClick={() => navigate(LOGIN_ROUTE)}>AUTHORIZATION</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </div>

    )


    // return (
    //     <header className="main_menu">
    //         <div className="logo_area">
    //             <Link to={SHOP_ROUTE} className="logo" >SHOES&BOOTS</Link>
    //         </div>
    //         {user.isAuth ?
    //             <nav>
    //                 <ul className='nav__links'>
    //                     <li><button>new</button></li>
    //                     <li><button>shop</button></li>
    //                     <li><button>sign in</button></li>
    //                     <li><button>bag</button></li>
    //                     <li><button>admin panel</button></li>
    //                 </ul>
    //             </nav>
    //             :
    //             <nav>
    //                 <ul className='nav__links'>
    //                     <li><button>arrivals</button></li>
    //                     <li><button>shop</button></li>
    //                     <li><button>cart</button></li>
    //                     <li><button onClick={() => user.setIsAuth(true)}>sign in</button></li>
    //                 </ul>
    //             </nav>
    //         }
    //     </header>
    // );
});

export default NavBar;