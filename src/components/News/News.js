import React from 'react';
import Loading from '../Loading';
import style from './News.module.css'

const News = ({news}) => {
    
    return (
        <div className={style.container}>
            {news.length > 0 ? (
                <div className={style.cards_container}>
                    {news.map(n => {
                        return(
                            <div className={style.card}>
                                <div className={style.card_img}>
                                    <img src={n.img} alt={n.title} />
                                </div>
                                <div className={style.card_text}>
                                    <p className={style.card_category}>{n.tag}</p>
                                    <h4>{n.title}</h4>
                                    <p className={style.subtitle}>{n.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : <Loading/>}
        </div>
    );
};

export default News;