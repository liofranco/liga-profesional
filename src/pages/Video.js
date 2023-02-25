import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../components/Highlights/Cards';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const Video = () => {

    const {videoId} = useParams()
    const [highlights, setHighlights] = useState([])

    useEffect(() => {
        const videos = async () => {
            const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJmCVoUfCBQb9lcfXIS8nXQ&maxResults=50&order=date&key=AIzaSyC67Cp5PAMxRhF_jCVpt4qhG_MMVuIMduc'
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setHighlights(resultadoApi.items.filter(item => item.snippet.title.includes('#TorneoBinance') && item.snippet.title.includes('resumen') && item.id.videoId !== videoId))
        }
        videos()
    }, [videoId])

    return (
        <main className="video-page-container">
            <VideoPlayer videoId={videoId} />
            <Cards highlights={highlights.slice(0,4)} />
        </main>
    );
};

export default Video;