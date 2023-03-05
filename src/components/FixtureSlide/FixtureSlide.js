import React, { useEffect, useState, useRef, useContext } from 'react';
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import Card from './Card';
import style from './FixtureSlide.module.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import Loading from '../Loading';
import { ApiContext } from '../../context/ApiContext';

const FixtureSlide = () => {

    const {fixtureSlide, currentRound} = useContext(ApiContext)

    const [indexSlide, setIndexSlide] = useState(0)
    const [endSlide, setEndSlide] = useState(false)

    useEffect(()=>{
        if(fixtureSlide.length > 0){
            if(fixtureSlide.every(match => match.status === 'Finalizado')){
                setIndexSlide(fixtureSlide.length -1)
            } else{
                setIndexSlide(fixtureSlide.findIndex(partido => partido.status !== 'Finalizado'))
            }
        }
    }, [fixtureSlide])

    const swiperRef = useRef();

    return (
        <section className={style.container}>
            {fixtureSlide.length > 0 ? (
                <>
                    <div className={style.header}>
                        <h3>Partidos</h3>
                        <div className={style.buttons}>
                            <button className={`${style.swiper_button} ${indexSlide === 0 ? style.swiper_disabled : ''}`} onClick={() => swiperRef.current?.slidePrev()}>
                                <MdOutlineArrowBackIos/>
                            </button>
                            <button className={`${style.swiper_button} ${endSlide ? style.swiper_disabled : ''}`} onClick={() => swiperRef.current?.slideNext()}>
                                <MdOutlineArrowForwardIos/>
                            </button>
                        </div>
                    </div>
                    <div className={style.swiper_container}>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={15}
                            modules={[Navigation]}
                            initialSlide={
                                fixtureSlide.every(match => match.status === 'Finalizado') ?
                                    fixtureSlide.length - 1 :
                                    fixtureSlide.findIndex(partido => partido.status !== 'Finalizado')
                            }        
                            className="fixture-slider mySwiper"
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setEndSlide(swiper.isEnd)
                                setIndexSlide(swiper.snapIndex)
                            }}
                        >
                            {fixtureSlide.map((match) => {
                                return(
                                    <SwiperSlide key={match.id} className={style.swiper_slide}>
                                        <Card match={match} fechaActual={currentRound} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </>
            ) : <Loading/>}
        </section>
    );
};

export default FixtureSlide;