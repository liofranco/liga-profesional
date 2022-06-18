import React from 'react';

const EstadisticasPartido = ({partido, estadisticas}) => {
    return (
        <section className="estadisticas-container">
            <div className='estadisticas-escudos'>
                <img src={partido.localEscudo} alt='' width={30} height={30} />
                <p></p>
            <img src={partido.visitanteEscudo} alt='' width={30} height={30} />
            </div>
            {estadisticas.map(e => {
                return(
                    <div key={e.nombreDato} className="estadistica">
                        <p>{e.dato1}</p>
                        <p className="estadistica-nombre">{e.nombreDato}</p>
                        <p>{e.dato2}</p>
                    </div>
                )
            })}
        </section>
    );
};

export default EstadisticasPartido;