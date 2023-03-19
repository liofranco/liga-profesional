import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Head from '../components/Noticia/Head';
import Imagen from '../components/Noticia/Imagen';
import Text from '../components/Noticia/Text';

const Noticia = () => {

    const { section, year, month, day, post } = useParams()

    const [text, setText] = useState([])
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [category, setCategory] = useState('')

    const id = useMemo(() => {
        return { section: section, year: year, month: month, day: day, post: post }
    }, [section, year, month, day, post])

    useEffect(() => {
        const getPost = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api/news/${id.section}/${id.year}/${id.month}/${id.day}/${id.post}`
            const res = await fetch(url)
            const result = await res.json()
            if (result.status === 'success') {
                setText(result.post)
                setImage(result.image)
                setTitle(result.title)
                setSubtitle(result.subtitle)
                setCategory(result.category)
            }
        }
        getPost()
    }, [id])

    return (
        <main className='main' style={{backgroundColor: '#fff'}}>
            <div className='post-page'>
                {title.length > 0 ? (
                    <>
                        <Head category={category} title={title} subtitle={subtitle}/>
                        <Imagen image={image} />
                        <Text text={text} />
                    </>
                ): <Loading/>}
            </div>
        </main>
    );
};

export default Noticia;