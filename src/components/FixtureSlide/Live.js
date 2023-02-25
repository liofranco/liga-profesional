import React from 'react';
import style from './FixtureSlide.module.css';

const Live = ({match}) => {

    const Status = () => {
        if(match.status.includes('juego')){
            return <p className={style.status_live}>{match.status}</p>
        } else if(match.status.includes('Desc')){
            return <p className={style.status_live}>Entretiempo</p>
        } else if(match.status.includes('Finalizado')){
            return <p className={style.status_finished}>{match.status}</p>
        }
    }

    return (
        <>
        {match.status === 'Sin comenzar' ? (
            <div className={style.live_container}></div>
        ): (
            <div className={style.live_container}>
                    <Status />
            </div>
        )}
        </>
    );
};

export default Live;