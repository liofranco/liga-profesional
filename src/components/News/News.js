import React from 'react';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import style from './News.module.css'

const News = ({news}) => {
    
    return (
        <div className={style.container}>
            {news.length > 0 ? (
                <div className={style.cards_container}>
                    {news.map((n,i) => {
                        return(
                            <Link to={`${n.link.slice(30)}`} className={style.card} key={i}>
                                <div className={style.card_img}>
                                    <img src={n.img} alt={n.title} />
                                </div>
                                <div className={style.card_text}>
                                    <p className={style.card_category}>{n.tag}</p>
                                    <h4>{n.title}</h4>
                                    <p className={style.subtitle}>{n.subtitle}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            ) : <Loading/>}
        </div>
    );
};

export default News;