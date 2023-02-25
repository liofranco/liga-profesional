import React from 'react';
import style from './VideoPlayer.module.css';

const VideoPlayer = ({ videoId }) => {
    return (
        <div className={style.video_container}>
            <iframe
                className={style.video}
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default VideoPlayer;