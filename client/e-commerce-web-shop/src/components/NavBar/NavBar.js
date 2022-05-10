import React, {useContext, useState} from 'react';
import {Context} from '../../index';
import './NavBar.css';
import '../../App.css';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {SHOP_ROUTE} from "../../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context);


    return (
        <header className="main_menu">
            <div className="logo_area">
                <Link to={SHOP_ROUTE} className="logo" >SHOES&BOOTS</Link>
            </div>
            {user.isAuth ?
                <nav>
                    <ul className='nav__links'>
                        <li><button>new</button></li>
                        <li><button>shop</button></li>
                        <li><button>sign in</button></li>
                        <li><button>bag</button></li>
                        <li><button>admin panel</button></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul className='nav__links'>
                        <li><button>arrivals</button></li>
                        <li><button>shop</button></li>
                        <li><button onClick={() => user.setIsAuth(true)}>sign in</button></li>
                        <li><button>bag</button></li>
                    </ul>
                </nav>
            }
        </header>
    );
});

export default NavBar;