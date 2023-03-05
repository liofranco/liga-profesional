import React, { useContext, useRef } from 'react';
import { ApiContext } from '../../context/ApiContext';
import List from './List';
import style from './Statistics.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Statistics = () => {

    const swiperRef = useRef();

    const { statistics } = useContext(ApiContext)

    return (
        <section className={style.container}>
            <h3>Estadisticas</h3>
            <div className={style.stats_cards_container}>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={15}
                    modules={[Navigation]}
                    className="mySwiper"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {statistics.map((stats, i) => {
                        return(
                            <SwiperSlide key={i} className={style.swiper_slide}>
                                <List stats={stats}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Statistics;