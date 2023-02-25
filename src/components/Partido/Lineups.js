import React from 'react';
import Campo from './Campo';
import style from './Partido.module.css';
import Substitutes from './Substitutes';
import './alineaciones.css';

const Lineups = ({match, alineaciones}) => {

    return (
        <section className={style.section_container}>
            <div className={style.lineups_container}>
                <Campo match={match} alineaciones={alineaciones}/>
                <Substitutes match={match} alineaciones={alineaciones}/>
            </div>
        </section>
    );
};

export default Lineups;