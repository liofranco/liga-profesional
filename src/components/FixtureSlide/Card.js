import React from 'react';
import { DateTime, Settings } from 'luxon';
import { Link } from 'react-router-dom';
import style from './FixtureSlide.module.css';
import Live from './Live';

const Card = ({match, fechaActual}) => {

    Settings.defaultLocale = "es"

    return (
        <Link to={match.route} className={style.card_container}>
            <div className={style.card_header_container}>
                <div className={style.card_header}>
                    <img src='/img/torneo_binance.png' alt='Torneo Binance' height={30}/>
                    <p>Fecha {fechaActual}</p>
                    <p className={style.card_date}>{DateTime.fromRFC2822(match.date).toFormat('cccc d LLLL')}</p>
                    <div className={style.card_stadium}>
                        <img src='/img/stadium.png' alt='Stadium' width={25} height={25} />
                        <p>{match.stadium}</p>
                    </div>
                </div>
            </div>
            <Live match={match} />
            <div className={style.match_container}>
                <div className={style.teams_container}>
                    <div className={style.team}>
                        <div className={style.team_data}>
                            <img 
                                className={style.team_img} 
                                src={match.teams.home.logo}
                                width={40}
                                height={40}
                                alt={match.teams.home.name}
                            />
                            <p>{match.teams.home.name}</p>
                        </div>
                        {match.status !== 'Sin comenzar' && <p className={style.team_goals}>{match.goals.home}</p> }
                    </div>
                    <div className={style.team}>
                        <div className={style.team_data}>
                            <img 
                                className={style.team_img} 
                                src={match.teams.away.logo}
                                width={40}
                                height={40}
                                alt={match.teams.away.name}
                            />
                            <p>{match.teams.away.name}</p>
                        </div>
                        {match.status !== 'Sin comenzar' && <p className={style.team_goals}>{match.goals.away}</p>}
                    </div>
                </div>
                {match.status === 'Sin comenzar' && (
                    <div className={style.match_hour}>
                        <p>{DateTime.fromRFC2822(match.date).toFormat('ccc d')}</p>
                        <h3>
                            {DateTime.fromRFC2822(match.date).toFormat('H')}:
                            {DateTime.fromRFC2822(match.date).minute === 1 ? '00' : DateTime.fromRFC2822(match.date).toFormat('mm') }
                        </h3>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Card;