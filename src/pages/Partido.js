import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DateTime, Settings } from 'luxon'
import EstadisticasPartido from '../components/EstadisticasPartido';
import AlineacionesPartido from '../components/AlineacionesPartido';
import Loading from '../components/Loading';

const Partido = () => {
    
    Settings.defaultLocale = "es"
    const {partidoId, localId, visitanteId} = useParams()

    const [partido, setPartido] = useState([])
    const [alineaciones, setAlineaciones] = useState([])
    const [estadisticas, setEstadisticas] = useState([])
    const [suplentesLocal, setSuplentesLocal] = useState([])
    const [suplentesVisitante, setSuplentesVisitante] = useState([])
    const [navEstadisticas, setNavEstadisticas] = useState(true)
    const [navAlineaciones, setNavAlineaciones] = useState(false)
    const [navEventos, setNavEventos] = useState(false)

    useEffect(() => {
        const apiPartido = async () => {
            const urlPartido = `http://localhost:5000/api/${partidoId}/${localId}/${visitanteId}`
            const respuestaPartido = await fetch(urlPartido)
            const resultadoPartido = await respuestaPartido.json()
            setPartido(resultadoPartido.partido)
            setAlineaciones(resultadoPartido.alineaciones)
            setEstadisticas(resultadoPartido.estadisticas)
            setSuplentesLocal(resultadoPartido.supLocal)
            setSuplentesVisitante(resultadoPartido.supVisitante)
        }
        apiPartido()
        // eslint-disable-next-line
    }, [])

    if(partido.length < 1) return <Loading />

    const Time = () => {
        let date = DateTime.fromISO(partido.date)
        if(date.minute === 1 ){
            date.c.minute = 0
        }
        if(partido.tiempo.includes('directo')){
            let tiempo = partido.tiempo.slice(9,-1)
            return <p className="resultado-tiempo live">{tiempo}</p>
        } else if(partido.tiempo.includes('desc')){
            return <p className="resultado-tiempo live">ET</p>
        } else if(partido.tiempo.includes('finalizado')){
            return <p className="resultado-tiempo">Final</p>
        } else {
            return <p className="resultado-tiempo">{date.toFormat('d MMM, HH:mm')}</p>
        }
    }
    
    const handleNavEstadisticas = () => {
        setNavEstadisticas(true)
        setNavAlineaciones(false)
        setNavEventos(false)
    }
    
    const handleNavAlineaciones = () => {
        setNavEstadisticas(false)
        setNavAlineaciones(true)
        setNavEventos(false)
    }
    const handleNavEventos = () => {
        setNavEstadisticas(false)
        setNavAlineaciones(false)
        setNavEventos(true)
    }



    return (
        <main className="main">
            <section className="partido-info">
                <h2>Liga Profesional - Fecha {partido.fecha}</h2>
                <div className="equipos-container">
                    <div className="partido-equipo local">
                        <img src={partido.localEscudo} alt={partido.local} width={50} height={50} />
                        <p>{partido.local}</p>
                    </div>
                    <div className="partido-resultado">
                        <p className="resultado">{partido.golLocal} - {partido.golVisitante}</p>
                        <Time />
                    </div>
                    <div className="partido-equipo">
                        <img src={partido.visitanteEscudo} alt={partido.visitante} width={50} height={50} />
                        <p>{partido.visitante}</p>
                    </div>
                </div>
                <div className='partido-goles'>
                    {partido.miniGoles.map((g, i) => {
                        return(
                            <div key={i} className='detalles-goles'>
                                <p>{g.golLocalJugador} {g.golLocalTiempo}</p>
                                <div className='detalles-goles-icon'>
                                    <img src='https://icongr.am/material/soccer.svg?size=15&color=333333' alt='' />
                                </div>
                                <p className='detalles-goles-visitante'>{g.golVisitanteJugador} {g.golVisitanteTiempo}</p>
                            </div>)})}
                </div>
            </section>
            <nav className="partido-nav">
                <ul>
                    <li onClick={handleNavEstadisticas} className={navEstadisticas ? 'active' : ''}>Estadísticas</li>
                    <li onClick={handleNavAlineaciones} className={navAlineaciones ? 'active' : ''}>Alineaciones</li>
                    <li onClick={handleNavEventos} className={navEventos ? 'active' : ''}>Eventos</li>
                </ul>
            </nav>
                {navEstadisticas && estadisticas.length > 0 ? <EstadisticasPartido partido={partido} estadisticas={estadisticas} /> : null}
                {navAlineaciones && alineaciones[0].length > 0? 
                    <AlineacionesPartido 
                        partido={partido} alineaciones={alineaciones}
                        suplentesLocal={suplentesLocal} suplentesVisitante={suplentesVisitante} />
                     : null}
        </main>
    );
};

export default Partido;