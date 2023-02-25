import React from 'react';
import { Link } from 'react-router-dom';
import style from './Teams.module.css'

const Clubes = ({teams}) => {
    return (
        <div className={style.container}>
            {teams.map(team => {
                return(
                    <Link to={`/clubes/${team.name}`} className={style.card} key={team.name}>
                        <img src={team.img} alt={team.name} />
                        <p>{team.name}</p>
                    </Link>
                )
            })}
        </div>
    );
};

export default Clubes;