import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsPlayFill } from 'react-icons/bs';
import style from './Highlights.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Cards = ({ highlights }) => {

    const swiperRef = useRef();

    return (
        <div className={style.cards_container}>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={15}
                modules={[Navigation]}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {highlights.map(video => {
                    return (
                        <SwiperSlide key={video.id.videoId} className={style.swiper_slide}>
                            <Link to={`/videos/${video.id.videoId}`} className={style.card}>
                                <div className={style.card_img}>
                                    <div className={style.video_play}>
                                        <button>
                                            <BsPlayFill />
                                        </button>
                                    </div>
                                    <img src={video.snippet.thumbnails.high.url} alt="" width={300} />
                                </div>
                                <p>{video.snippet.title}</p>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Cards;