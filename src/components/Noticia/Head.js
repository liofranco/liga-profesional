import React from 'react';
import style from './Noticia.module.css';

const Head = ({category, title, subtitle}) => {
    return (
        <div className={style.head_container}>
            <h3>{category}</h3>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Head;