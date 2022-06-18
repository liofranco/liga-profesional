import React from 'react';
import { DateTime, Settings } from 'luxon'
import Resultado from './Resultado';
import { Link } from 'react-router-dom';

const PartidoFixture = ({partido}) => {
    Settings.defaultLocale = "es"
    let hora = DateTime.fromRFC2822(partido.date)
    if(hora.minute === 1){
        hora.c.minute = 0
    }
    return(
        <Link to={partido.linkPartido} className='partido-container'>
            <div className='equipo local'>
                <p>{partido.local}</p>
                <img src={partido.localEscudo} alt={partido.local} width={25} height={25} />
            </div>
            <span className='resultado-container'>
                {partido.tiempo === 'Sin comenzar' ? <p className='hora'>{hora.toFormat('HH:mm')}</p> : <Resultado partido={partido} /> }
            </span>
            <div className='equipo visitante'>
                <img src={partido.visitanteEscudo} alt={partido.visitante} width={25} height={25} />
                <p>{partido.visitante}</p>
            </div>
        </Link>
    )
};

export default PartidoFixture;