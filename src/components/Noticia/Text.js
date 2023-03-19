import React from 'react';
import parse from 'html-react-parser';
import style from './Noticia.module.css';

const Text = ({ text }) => {
    return (
        <section className={style.text_container}>
            {text.map((post, i) => {
                return (
                    <p key={i}>
                        {parse(post.text)}
                    </p>
                )
            })}
        </section>
    );
};

export default Text;