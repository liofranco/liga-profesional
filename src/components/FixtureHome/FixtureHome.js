import React, { useContext } from 'react';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import PartidoFixtureHome from './PartidoFixtureHome';
import { ApiContext } from '../../context/ApiContext';

const FixtureHome = () => {

    const {currentFixture, currentRound} = useContext(ApiContext)

    return (
        <section className="fixture-container">
            <p>Fecha {currentRound}</p>
            <div className='fecha-container' style={{width: '100%'}}>
                {currentFixture.length > 0 ? (
                    currentFixture.map(day => {
                        return(
                            <section className='dia-container' key={day.date}>
                                <p className='dia'>{day.date}</p>
                                {day.fixture.map(partido => <PartidoFixtureHome partido={partido} key={partido.id} />)}
                            </section>)
                    })
                ): <Loading />}
            </div>
            <Link to='/fixture' className="fulltable-button">Ver fixture completo</Link>
        </section>
    );
};

export default FixtureHome;