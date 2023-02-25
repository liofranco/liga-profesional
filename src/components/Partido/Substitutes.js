import React from 'react';
import style from './Partido.module.css'

const Substitutes = ({match, alineaciones}) => {
    return (
        <>
            <div className={style.subs_header_container}>
                <div className={style.subs_header}>
                    <img src={match.teams.home.logo} alt={match.teams.home.name} width={30} height={30} />
                    <p>SUPLENTES</p>
                    <img src={match.teams.away.logo} alt={match.teams.away.name} width={30} height={30} />
                </div>
            </div>
            <div className={style.substitutes_container}>
                <div className={style.substitutes}>
                    {alineaciones.home.substitutes.map(s => {
                        return (
                            <div key={s.number} className={style.subs_player}>
                                <p className={style.subs_number}>{s.number}</p>
                                <p>{s.player}</p>
                                {s.events.map((ev, i) => {
                                    return (
                                        <img key={i} src={`/img/${ev.img}.png`}
                                            alt='' width={15} height={15} />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className={`${style.substitutes} ${style.substitutes_away}`}>
                    {alineaciones.away.substitutes.map(s => {
                        return (
                            <div key={s.number} className={style.subs_player}>
                                {s.events.map((ev, i) => {
                                    return (
                                        <img key={i} src={`/img/${ev.img}.png`}
                                            alt='' width={15} height={15} />
                                    )
                                })}
                                <p>{s.player}</p>
                                <p className={style.subs_number}>{s.number}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Substitutes;