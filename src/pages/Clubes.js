import React, {useContext} from 'react';
import Loading from '../components/Loading';
import Teams from '../components/Teams/Teams';
import { ApiContext } from '../context/ApiContext';

const Clubes = () => {

    const {teams} = useContext(ApiContext)

    return (
        <main className="main">
            <div className="page-header">
                <h1>Clubes</h1>
            </div>
            {teams.length > 0 ? (
                <Teams teams={teams} /> ) : <Loading/> }
        </main>
    );
};

export default Clubes;