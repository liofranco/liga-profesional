import React from 'react';
import { Link } from 'react-router-dom';
import {BsPlayFill} from 'react-icons/bs';
import style from './Highlights.module.css';

const Cards = ({highlights}) => {
    return (
        <div className={style.cards_container}>
            {highlights.map(video => {
                return(
                    <Link to={`/videos/${video.id.videoId}`} className={style.card} key={video.id.videoId}>
                        <div className={style.card_img}>
                            <div className={style.video_play}>
                                <button>
                                    <BsPlayFill/>
                                </button>
                            </div>
                            <img src={video.snippet.thumbnails.high.url} alt="" width={300}/>
                        </div>
                        <p>{video.snippet.title}</p>
                    </Link>
                )
            })}
        </div>
    );
};

export default Cards;