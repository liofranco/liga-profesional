import React from 'react';
import style from './Partido.module.css';

const Stats = ({estadisticas}) => {

    return (
        <section className={style.section_container}>
            <div className={style.stats_container}>
                {estadisticas.map(e => {
                return(
                    <div key={e.type} className={style.stats}>
                        <p>{e.home}</p>
                        <p className={style.stats_name}>{e.type}</p>
                        <p>{e.away}</p>
                    </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Stats;