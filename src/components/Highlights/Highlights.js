import React, {useState, useEffect} from 'react';
import style from './Highlights.module.css';
import Cards from './Cards';

const Highlights = () => {

    const [highlights, setHighlights] = useState([])

    useEffect(() => {
        const getHighlights = async () => {
            const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJmCVoUfCBQb9lcfXIS8nXQ&maxResults=50&order=date&key=AIzaSyC67Cp5PAMxRhF_jCVpt4qhG_MMVuIMduc'
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setHighlights(resultadoApi.items.filter(item => item.snippet.title.includes('#TorneoBinance') && item.snippet.title.includes('resumen')))
        }
        getHighlights()
    }, [])

    return (
        <section className={style.background}>
            <div className={style.container}>
                <h3>Resumen de los partidos</h3>
                <Cards highlights={highlights.slice(0,10)} />
            </div>
        </section>
    );
};

export default Highlights;