import React from 'react';

const Resultado = ({partido}) => {

    let tiempo = partido.tiempo
    const Time = () => {
        if(tiempo.includes('juego')){
            return <p className="live">{tiempo.slice(10)}</p>
        } else if(tiempo.includes('Desc')){
            return <p className="live">ET</p>
        } else if(tiempo.includes('Finalizado'))
        return <p className="final">F</p>
    }

    return (
        <>
            <p className='resultado'>{partido.resultado}</p>
            <Time />
        </>
    );
};

export default Resultado;