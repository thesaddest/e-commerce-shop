import React, {useContext} from 'react';
import {Context} from '../../index';
import './NavBar.css'
import '../../App.css'
import {Link} from "react-router-dom";
import {observable} from "mobx";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <header className="main_menu">
            <div className="logo_area">
                <Link to='/shop' className="logo" >E-COMMERCE</Link>
            </div>
            {user.isAuth ?
                <nav>
                    <ul className='nav__links'>
                        <li><button >new arrivals</button></li>
                        <li><button >shop</button></li>
                        <li><button >sign in</button></li>
                        <li><button >bag</button></li>
                        <li><button >admin panel</button></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul className='nav__links'>
                        <li><button>new arrivals</button></li>
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