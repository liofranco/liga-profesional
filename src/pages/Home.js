import React, { useContext } from 'react';
import Fixture from '../components/Fixture';
import Goleadores from '../components/Goleadores';
import Loading from '../components/Loading';
import TablaPosiciones from '../components/TablaPosiciones';
import { ApiContext } from '../context/ApiContext';

const Home = () => {

    const {resultados} = useContext(ApiContext)

    return (
        <main className="main">
            <section className="section-container">
                <div className="tournament-name">
                    <img src="/img/lpf.png" alt="Liga Profesional de Fútbol" width={70} height={70} />
                    <h1>Liga Profesional de Fútbol</h1>
                </div>
            </section>
            {resultados.status === 'success'? (
                <section className="resume-container">
                    <section className="col">
                        <Fixture />
                        <Goleadores />
                    </section>
                    <section className="col tabla-home">
                        <TablaPosiciones />
                    </section>
                </section>) : <Loading />}
        </main>
    );
};

export default Home;