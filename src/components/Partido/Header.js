import React from 'react';
import style from './Partido.module.css';
import Live from './Live';

const Header = ({match}) => {

    return (
        <div className={style.header_container}>
            <div className={style.header}>
                <img src='/img/torneo_binance.png' alt='Torneo Binance Logo' height={30}/>
                <h2>-</h2>
                <h2>Fecha {match.round}</h2>    
            </div>
            <div className={style.teams_container}>
                <div className={style.team}>
                    <img src={match.teams.home.logo} alt={match.teams.home.name} width={50} height={50} />
                    <p>{match.teams.home.name}</p>
                </div>
                <div className={style.result_container}>
                    <p className={style.result}>{match.goals.home} - {match.goals.away}</p>
                    <Live match={match} />
                </div>
                <div className={style.team}>
                    <img src={match.teams.away.logo} alt={match.teams.away.name} width={50} height={50} />
                    <p>{match.teams.away.name}</p>
                </div>
            </div>
            <div className={style.events_container}>
                {match.events.map((g, i) => {
                    return(
                        <div key={i} className={style.events_goals}>
                            <p>{g.home.player} {g.home.time}</p>
                            <div className={style.goals_icon}>
                                <img src='https://icongr.am/material/soccer.svg?size=15&color=333333' alt='' />
                            </div>
                            <p className={style.events_goals_away}>{g.away.player} {g.away.time}</p>
                        </div>)})}
            </div>
        </div>
    );
};

export default Header;