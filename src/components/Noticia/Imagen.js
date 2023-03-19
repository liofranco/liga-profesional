import React from 'react';
import style from './Noticia.module.css';

const Imagen = ({image}) => {
    return (
        <div className={style.image_container}>
            <img src={image} alt='Imagen'/>
        </div>
    );
};

export default Imagen;