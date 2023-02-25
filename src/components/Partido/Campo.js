import React from 'react';
import style from './Partido.module.css'

const Campo = ({match, alineaciones}) => {
    return (
        <>
            <div className={style.lineups_header_home}>
                <img src={match.teams.home.logo} alt={match.teams.home.name} width={20} height={20} />
                <p>{match.teams.home.name}</p>
            </div>
            <div className={style.campo_container}>
                <div className={style.campo}>
                    <ul className={style.lineup_home}>
                        {alineaciones.home.initial.map(j => {
                            return (
                                <li className={j.grid} key={`${j.player}-${j.number}`}>
                                    <div className={style.lineup_player_img}>
                                        <img src={j.img} alt='' width={45} height={45} />
                                        <div style={{ position: 'absolute' }}>
                                            <p style={{ backgroundColor: j.background }} className={style.lineup_player_number}>{j.number}</p>
                                        </div>
                                        {j.events.map((ev, i) => {
                                            return (
                                                <div key={i} style={{ position: 'absolute' }}>
                                                    <img className={`evento-img ${ev.img}`} src={`/img/${ev.img}.png`} alt='' width={10} height={10} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <p className={style.lineup_player_name}>{j.player}</p>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className={style.lineup_away}>
                        {alineaciones.away.initial.map(j => {
                            return (
                                <li className={j.grid} key={`${j.player}-${j.number}`}>
                                    <div className={style.lineup_player_img}>
                                        <img src={j.img} alt='' width={45} height={45} />
                                        <div style={{ position: 'absolute' }}>
                                            <p style={{ backgroundColor: j.background }} className={style.lineup_player_number}>{j.number}</p>
                                        </div>
                                        {j.events.map((ev, i) => {
                                            return (
                                                <div key={i} style={{ position: 'absolute' }}>
                                                    <img className={`evento-img ${ev.img}`} src={`/img/${ev.img}.png`} alt='' width={10} height={10} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <p className={style.lineup_player_name}>{j.player}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={style.lineups_header_away}>
                <p>{match.teams.away.name}</p>
                <img src={match.teams.away.logo} alt={match.teams.away.name} width={20} height={20} />
            </div>
        </>
    );
};

export default Campo;