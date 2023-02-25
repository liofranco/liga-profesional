import React, {useContext} from 'react';
import { ApiContext } from '../../context/ApiContext';
import List from './List';
import style from './Statistics.module.css';

const Statistics = () => {

    const {statistics} = useContext(ApiContext)

    return (
        <section className={style.container}>
            <h3>Estadisticas</h3>
            <div className={style.stats_cards_container}>
                {statistics.map((stats,i) => <List stats={stats} key={i} />)}
            </div>
        </section>
    );
};

export default Statistics;