import React from 'react';
import style from './Statistics.module.css';

const List = ({stats}) => {
    return (
        <div className={style.stats_ranking_container} key={stats.name}>
            <ul>
                <li>
                    <h3>{stats.name}</h3>
                    <div className={style.top1}>
                        <p>{stats.ranking[0].pos}</p>
                        <img src={stats.ranking[0].img} alt={stats.ranking[0].nombre} className={style.player_img}/>
                        <div className={style.player}>
                            <span className={style.top1_name}>{stats.ranking[0].nombre}</span>
                            <div className={style.team}>
                                <div className={style.top1_team_img}>
                                    <img src={stats.ranking[0].escudo} alt={stats.ranking[0].equipo} width={15} height={15}/>
                                </div>
                                <span>{stats.ranking[0].equipo}</span>
                            </div>
                        </div>
                        <p className={style.top1_number}>{stats.ranking[0].cantidad}</p>
                    </div>
                </li> 
                {stats.ranking.slice(1,5).map(j => {
                    return (
                        <li key={j.pos}>
                            <p>{j.pos}</p>
                            <img src={j.img} alt={j.nombre} className={style.player_img}/>
                            <div className={style.player}>
                                <span>{j.nombre}</span>
                                <div className={style.team}>
                                    <img src={j.escudo} alt={j.equipo} width={15} height={15}/>
                                    <span>{j.equipo}</span>
                                </div>
                            </div>
                            <p>{j.cantidad}</p>
                        </li>    
                    )
                })}
            </ul>
        </div>
    );
};

export default List;