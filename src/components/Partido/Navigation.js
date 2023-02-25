import React, {useState} from 'react';
import Lineups from './Lineups';
import style from './Navigation.module.css';
import Stats from './Stats';
import Tabla from './Tabla';

const Navigation = ({match, alineaciones, estadisticas}) => {

    const [navEstadisticas, setNavEstadisticas] = useState(false)
    const [navInfo, setNavInfo] = useState(true)
    const [navAlineaciones, setNavAlineaciones] = useState(false)
    
    const handleNavEstadisticas = () => {
        setNavEstadisticas(true)
        setNavAlineaciones(false)
        setNavInfo(false)
    }
    
    const handleNavAlineaciones = () => {
        setNavEstadisticas(false)
        setNavAlineaciones(true)
        setNavInfo(false)
    }

    const handleNavInfo = () => {
        setNavEstadisticas(false)
        setNavAlineaciones(false)
        setNavInfo(true)
    }

    return (
        <>
            <nav className={style.navigation}>
                <ul>
                    <li onClick={handleNavInfo} className={navInfo ? `${style.active} ${style.nav_li}` : style.nav_li}>Tabla</li>
                    {estadisticas.length > 0 && (
                        <li onClick={handleNavEstadisticas} className={navEstadisticas ? `${style.active} ${style.nav_li}` : style.nav_li}>Estadísticas</li>
                    )}
                    {alineaciones.home.initial.length > 0 && (
                        <li onClick={handleNavAlineaciones} className={navAlineaciones ? `${style.active} ${style.nav_li}` : style.nav_li}>Alineaciones</li>
                    )}
                </ul>
            </nav>
            {navInfo && <Tabla match={match} />}
            {navEstadisticas && <Stats match={match} estadisticas={estadisticas}/>}
            {navAlineaciones && <Lineups match={match} alineaciones={alineaciones} />}
        </>
    );
};

export default Navigation;