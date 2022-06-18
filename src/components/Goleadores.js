import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const Goleadores = () => {

    const {goleadores} = useContext(ApiContext)

    return (
        <section className="goleadores-container">
            <h3>Goleadores</h3>
            <ul>
                {goleadores.map(j => {
                    return (
                        <li key={j.pos}>
                            <p>{j.pos}</p>
                            <img src={j.img} alt={j.nombre} className="goleador-img"/>
                            <div className="goleadores-jugador">
                                <span>{j.nombre}</span>
                                <div className="goleadores-equipo">
                                    <img src={j.escudo} alt={j.equipo} width={15} height={15}/>
                                    <span>{j.equipo}</span>
                                </div>
                            </div>
                            <p>{j.cantidad}</p>
                        </li>    
                    )
                })}
            </ul>
        </section>
    );
};

export default Goleadores;