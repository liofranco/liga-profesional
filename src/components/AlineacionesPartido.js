import React from 'react';
import '../alineaciones.css'

const AlineacionesPartido = ({alineaciones, partido, suplentesVisitante, suplentesLocal}) => {
    return (
        <div className='alineacion-container'>
            <div className='alineacion-equipo'>
                <img src={partido.localEscudo} alt='' width={20} height={20} />
                <p>{partido.local}</p>
                
            </div>
            <div className='alineacion-cancha'>
                    {alineaciones.length > 0 ? (
                        <div className='campo'>
                        <ul className='local'>
                            {alineaciones[0].map(j => {
                                let img = j.img
                                if(!j.img.includes('nofoto')){
                                    img = img.slice(0,-11)
                                }
                                return(
                                    <li className={j.clase} key={`${j.jugador}-${j.num}`}>
                                        <div className='jugador-img'>
                                            <img src={img} alt='' width={45} height={45} />
                                            <div className='eventos-container'>
                                                <p className='num-jugador'>{j.num}</p>
                                            </div>
                                            {j.eventos.map((ev,i) => {
                                                    return (
                                                        <div key={i} className='eventos-container'>
                                                            <img className={`evento-img ${ev.img}`} src={`/img/${ev.img}.png`} alt='' width={10} height={10}/>
                                                        </div>
                                                    )
                                            })}
                                        </div>
                                        <p>{j.jugador}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className='visitante'>
                            {alineaciones[1].map(j => {
                                let img = j.img
                                if(!j.img.includes('nofoto')){
                                    img = img.slice(0,-11)
                                }
                                return(
                                    <li className={j.clase} key={`${j.jugador}-${j.num}`}>
                                        <div className='jugador-img'>
                                            <img src={img} alt='' width={45} height={45} />
                                            <div className='eventos-container'>
                                                <p className='num-jugador'>{j.num}</p>
                                            </div> 
                                            {j.eventos.map((ev,i) => {
                                                    return (
                                                        <div key={i} className='eventos-container'>
                                                            <img className={`evento-img ${ev.img}`} src={`/img/${ev.img}.png`} alt='' width={10} height={10}/>
                                                        </div>
                                                    )
                                            })}
                                        </div>
                                        <p>{j.jugador}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        </div>
                    ) : <p>Cargando</p>}
            </div>
            <div className='alineacion-equipo'>
                <img src={partido.visitanteEscudo} alt='' width={20} height={20} />
                <p>{partido.visitante}</p>
            </div>
            <div className='suplentes-title-container'>
                <div className='suplentes-title'>
                    <img src={partido.localEscudo} alt='' width={30} height={30} />
                    <p>SUPLENTES</p>
                    <img src={partido.visitanteEscudo} alt='' width={30} height={30} />
                </div>
            </div>
            {suplentesLocal.length > 0 && suplentesVisitante.length > 0 ? (
                <div className='suplentes-container'>
                    <div className='suplentes'>
                        {suplentesLocal.map(s => {
                            return(
                                <div key={s.numero} className='suplente-jugador'>
                                    <p className='suplente-num'>{s.numero}</p>
                                    <p>{s.nombre}</p>
                                    {s.evtPlayer.map((ev, i) => {
                                        return (
                                                <img key={i} src={`/img/${ev.img}.png`}
                                                     alt='' width={15} height={15} />
                                        )
                                    })}
                                </div>
                            )
                        })}      
                    </div>
                    <div className='suplentes sup-visitante'>
                        {suplentesVisitante.map(s => {
                            return(
                                <div key={s.numero} className='suplente-jugador'>
                                    {s.evtPlayer.map((ev, i) => {
                                        return (
                                                <img key={i} src={`/img/${ev.img}.png`}
                                                     alt='' width={15} height={15} />
                                        )
                                    })}
                                    <p>{s.nombre}</p>
                                    <p className='suplente-num'>{s.numero}</p>
                                </div>
                            )
                        })}      
                    </div>

                </div>
            ) : null}
        </div>
    );
};

export default AlineacionesPartido;