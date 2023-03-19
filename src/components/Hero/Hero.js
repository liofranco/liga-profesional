import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import style from './Hero.module.css'

const Hero = () => {

    const {hero} = useContext(ApiContext)

    return (
        <section className={style.main_image_container}>
            <div className={style.banner_container}>
                <Link to={hero.link ? hero.link.slice(30) : ''} className={style.main_image}>
                    {hero.img && <img src={hero.img} alt="Banner"/> }
                    <div className={style.main_image_background}></div>
                    <div className={style.main_image_text}>
                        <p className={style.category_tag}>{hero.tag}</p>
                        <h3>{hero.title}</h3>
                        <p>{hero.subtitle}</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;