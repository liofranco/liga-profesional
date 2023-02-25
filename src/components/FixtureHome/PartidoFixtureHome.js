import React from 'react';
import { DateTime, Settings } from 'luxon';
import { Link } from 'react-router-dom';

const PartidoFixtureHome = ({partido}) => {
    Settings.defaultLocale = "es"
    let hora = DateTime.fromRFC2822(partido.date)
    if(hora.minute === 1){
        hora.c.minute = 0
    }

    let status = partido.status
    const Time = () => {
        if(status.includes('juego')){
            return <p className="fixture-col live">{status.slice(10)}</p>
        } else if(status.includes('Desc')){
            return <p className="fixture-col live">ET</p>
        } else {
            return <p className="fixture-col"></p>
        }
    }

    return(
        <Link to={partido.route} className='partido-container'>
            <Time/>
            <div className='equipo local'>
                <p>{partido.teams.home.code}</p>
                <img src={partido.teams.home.logo} alt={partido.teams.home.name} width={25} height={25} />
            </div>
            <span className='resultado-container'>
                {partido.status === 'Sin comenzar' ? 
                    <p className='hora'>{hora.toFormat('HH:mm')}</p> : 
                    <p className={`resultado ${status.includes('juego') || status.includes('Desc') ? 'resultado-live' : ''}`}>{partido.score}</p>
                }
            </span>
            <div className='equipo visitante'>
                <img src={partido.teams.away.logo} alt={partido.teams.away.name} width={25} height={25} />
                <p>{partido.teams.away.code}</p>
            </div>
            <p className='fixture-col'>{'>'}</p>
        </Link>
    )
};

export default PartidoFixtureHome;