import React, {useContext} from 'react';
import News from '../components/News/News';
import { ApiContext } from '../context/ApiContext';

const Noticias = () => {

    const {news} = useContext(ApiContext)

    return (
        <main className="main">
            <div className="page-header">
                <h1>Noticias</h1>
            </div>
            <News news={news}/>
        </main>
    );
};

export default Noticias;