import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import FixtureSlide from '../components/FixtureSlide/FixtureSlide';
import Loading from '../components/Loading';
import TablaHome from '../components/TablaHome/TablaHome';
import NewsHome from '../components/NewsHome/NewsHome';
import FixtureHome from '../components/FixtureHome/FixtureHome';
import Hero from '../components/Hero/Hero';
import Statistics from '../components/Statistics/Statistics';
import Highlights from '../components/Highlights/Highlights';

const Home = () => {

    const { table } = useContext(ApiContext)

    return (
        <main className="main">
            <Hero />
            {table.length > 0 ? (
                <section className="home-container">
                    <FixtureSlide />
                    <div className="info-container">
                        <div className="tournament-data-container">
                            <TablaHome equipos={table.slice(0, 5)} />
                            <FixtureHome />
                        </div>
                        <NewsHome />
                    </div>
                </section>
            ) : <Loading />}
            <Highlights />
            <Statistics />
        </main>
    );
};

export default Home;