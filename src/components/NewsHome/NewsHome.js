import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import style from './NewsHome.module.css';

const NewsHome = () => {

    const {news} = useContext(ApiContext)

    return (
        <div className={style.container}>
            <div className={style.news}>
                <div className={style.title_container}>
                    <h3 className={style.title}>NOTICIAS</h3>
                    <Link to='/noticias'>Ver mas {'>>'}</Link>
                </div>
                <div className={style.cards_container}>
                    {news.slice(0,8).map((n, i)=>{
                        return(
                            <Link to={`${n.link.slice(30)}`} className={style.card} key={i}>
                                <div className={style.card_img}>
                                    <img src={n.img} alt={n.title}/>
                                </div>
                                <div className={style.card_text}>
                                    <p className={style.card_category}>{n.tag}</p>
                                    <h4>{n.title}</h4>
                                    <p>{n.subtitle}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default NewsHome;