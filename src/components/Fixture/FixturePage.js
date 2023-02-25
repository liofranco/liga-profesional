import React, { useContext, useEffect, useState } from 'react';
import { DateTime, Settings } from 'luxon';
import PartidoFixture from './PartidoFixture';
import Loading from '../Loading';
import { ApiContext } from '../../context/ApiContext';
import style from './Fixture.module.css';


const FixturePage = () => {
    
    Settings.defaultLocale = "es"

    const {currentFixture, totalRounds, currentRound} = useContext(ApiContext)
    const [fixture, setFixture] = useState(currentFixture)
    const [fechaSelect, setfechaSelect] = useState(currentRound)
    const [cantFechas, setCantFechas] = useState([]) 

    useEffect(()=> {
        let arrayFechas = []
        for (let index = 1; index <= totalRounds; index++) {
            arrayFechas.push(index)
        }
        setCantFechas(arrayFechas)
    }, [totalRounds])

    const handleChange = e => {
        setfechaSelect(parseInt(e.target.value))
        setFixture([])
        const getRound = async () => {
            const urlApi = `https://liga-profesional-scraping.vercel.app/api/round/${e.target.value}`
            const respuestaApi = await fetch(urlApi)
            const resultadoApi = await respuestaApi.json()
            let arrayFechas = []
            resultadoApi.partidos.forEach(partido => {
                let dia = DateTime.fromRFC2822(partido.date).toFormat('ccc d LLLL')
                let buscarDate = arrayFechas.some(a => a.date === dia)
                if(!buscarDate){
                    arrayFechas = [...arrayFechas, {"date": dia, "fixture": [partido]}]
                } else {
                    arrayFechas.forEach(a => {
                        if(a.date === dia){
                            a.fixture.push(partido)
                        }
                    })
                }

            })
            setFixture(arrayFechas)
          }
        getRound()
    }

    return (
            <section className={style.container}>
                <select className={style.select_rounds} value={fechaSelect} onChange={handleChange}>
                    {cantFechas.map(fecha => <option value={fecha} key={fecha}>Fecha {fecha}</option>)}
                </select>
                <div className={style.matchs}>
                    {fixture.length > 0 ? (
                        fixture.map(dia => {
                            return(
                                <section className={style.day_container} key={dia.date}>
                                    <p className={style.day}>{dia.date}</p>
                                    {dia.fixture.map(partido => <PartidoFixture partido={partido} key={partido.idPartido} />)}
                                </section>)
                        })
                    ): <Loading />}
                </div>
            </section>
    );
};

export default FixturePage;