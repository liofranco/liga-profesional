import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

const Header = () => {

    const [menuMobile, setMenuMobile] = useState(false)

    return (
        <header className={style.container}>
            <div className={style.header}>
                <Link to='/'>
                    <img src='/img/lpf_header.png' alt='' width={40} height={40} />
                </Link>
                <ul>
                    <li>
                        <Link to='/clubes'>
                            Clubes
                        </Link>
                    </li>
                    <li>
                        <Link to='/fixture'>
                            Fixture
                        </Link>
                    </li>
                    <li>
                        <Link to='/tabla'>
                            Tabla
                        </Link>
                    </li>
                    <li>
                        <Link to='/noticias'>
                            Noticias
                        </Link>
                    </li>
                </ul>
                {!menuMobile ?
                    <GiHamburgerMenu onClick={() => setMenuMobile(true)} className={style.menu_button} /> :
                    <VscChromeClose onClick={() => setMenuMobile(false)} className={style.close_button} />
                }
            </div>
            <nav className={`${!menuMobile ? style.menu_mobile : `${style.menu_mobile_open} ${style.menu_mobile}`}`}>
                <ul>
                    <li>
                        <Link onClick={()=> setMenuMobile(false)} to='/clubes'>
                            Clubes
                        </Link>
                    </li>
                    <li>
                        <Link onClick={()=> setMenuMobile(false)} to='/fixture'>
                            Fixture
                        </Link>
                    </li>
                    <li>
                        <Link onClick={()=> setMenuMobile(false)} to='/tabla'>
                            Tabla
                        </Link>
                    </li>
                    <li>
                        <Link onClick={()=> setMenuMobile(false)} to='/noticias'>
                            Noticias
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;