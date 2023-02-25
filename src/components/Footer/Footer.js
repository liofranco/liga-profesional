import React from 'react';
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.sponsors}>
                <img src="/img/logos/binance.png" alt="Binance logo"/>
                <img src="/img/logos/bna.png" alt="BNA logo"/>
                <img src="/img/logos/quilmes.png" alt="Quilmes logo"/>
                <img src="/img/logos/ypf.png" alt="YPF logo"/>
                <img src="/img/logos/mcdonalds.png" alt="Mc Donalds logo"/>
                <img src="/img/logos/pedidosya.png" alt="Pedidos Ya logo"/>
                <img src="/img/logos/tcl.png" alt="TCL logo"/>
                <img src="/img/logos/naldo.png" alt="Naldo logo"/>
            </div>
            <div className={style.social}>
                <img src="/img/lpf_white.png" alt="Torneo Binance" height={50}/>
                <div className={style.social_icons}>
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                    <BsYoutube />
                    <BsLinkedin />
                </div>
            </div>
        </footer>
    );
};

export default Footer;