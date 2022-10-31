import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import { DateTime, Settings } from 'luxon'
import PartidoFixture from './PartidoFixture';
import Loading from './Loading';


const Fixture = () => {
    
    Settings.defaultLocale = "es"

    const {resultados} = useContext(ApiContext)
    const [fixture, setFixture] = useState([])
    const [fechaSelect, setfechaSelect] = useState(0)
    const [cantFechas, setCantFechas] = useState([])

    useEffect(()=> {
        if(resultados.status === 'success'){
            let arrayPartidos = []
            let arrayFechas = []
            resultados.partidos.forEach(partido => {
                let dia = DateTime.fromRFC2822(partido.date).toLocaleString(DateTime.DATE_FULL)
                let buscarDate = arrayPartidos.some(a => a.date === dia)
                if(!buscarDate){
                    arrayPartidos = [...arrayPartidos, {"date": dia, "partidos": [partido]}]
                } else {
                    arrayPartidos.forEach(a => {
                        if(a.date === dia){
                            a.partidos.push(partido)
                        }
                    })
                }
                
            })
            for (let index = 1; index <= resultados.cantidadFechas; index++) {
                arrayFechas.push(index)
                
            }
            setCantFechas(arrayFechas)
            setFixture(arrayPartidos)
            setfechaSelect(resultados.fechaActual)

        }
    }, [resultados])

    const handleChange = e => {
        setfechaSelect(parseInt(e.target.value))
        setFixture([])
        const consultarApi = async () => {
            const urlApi = `https://liga-profesional-scraping.vercel.app/api/round/${e.target.value}`
            const respuestaApi = await fetch(urlApi)
            const resultadoApi = await respuestaApi.json()
            let arrayFechas = []
            resultadoApi.partidos.forEach(partido => {
                let dia = DateTime.fromRFC2822(partido.date).toLocaleString(DateTime.DATE_FULL)
                let buscarDate = arrayFechas.some(a => a.date === dia)
                if(!buscarDate){
                    arrayFechas = [...arrayFechas, {"date": dia, "partidos": [partido]}]
                } else {
                    arrayFechas.forEach(a => {
                        if(a.date === dia){
                            a.partidos.push(partido)
                        }
                    })
                }

            })
            setFixture(arrayFechas)
          }
        consultarApi()
    }

    return (
        <section className="fixture-container">
            <select className='select-fechas' value={fechaSelect} onChange={handleChange}>
                {cantFechas.map(fecha => <option value={fecha} key={fecha}>Fecha {fecha}</option>)}
            </select>
            <div className='fecha-container' style={{width: '100%'}}>
                {fixture.length > 0 ? (
                    fixture.map(dia => {
                        return(
                            <section className='dia-container' key={dia.date}>
                                <p className='dia'>{dia.date}</p>
                                {dia.partidos.map(partido => <PartidoFixture partido={partido} key={partido.idPartido} />)}
                            </section>)
                    })
                ): <Loading />}
            </div>
        </section>
    );
};

export default Fixture;