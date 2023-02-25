import React, { createContext, useState, useEffect } from 'react';
import { DateTime, Settings } from 'luxon'

export const ApiContext = createContext()

const ApiProvider = (props) => {

    Settings.defaultLocale = "es"

    const [table, setTable] = useState([])
    const [currentFixture, setCurrentFixture] = useState([])
    const [fixtureSlide, setFixtureSlide] = useState([])
    const [currentRound, setCurrentRound] = useState(0)
    const [totalRounds, setTotalRounds] = useState(0)
    const [teams, setTeams] = useState([])
    const [news, setNews] = useState([])
    const [hero, setHero] = useState([])
    const [statistics, setStatistics] = useState([])

    useEffect(() => {
        const getTable = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setTable(resultadoApi.ranking)
            setTotalRounds(resultadoApi.rounds.total)
            setStatistics(resultadoApi.statistics)
        }
        getTable()

        const getNews = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api/news`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setNews(resultadoApi.news)
        }
        getNews()

        const getHero = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api/home`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setHero(resultadoApi.main)
        }
        getHero()

        const getTeams = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api/teams`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setTeams(resultadoApi.teams)
        }
        getTeams()

        const getCurrentFixture = async () => {
            const url = `https://liga-profesional-scraping.vercel.app/api/current`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            let arrayPartidos = []
            resultadoApi.fixture.forEach(partido => {
                let dia = DateTime.fromRFC2822(partido.date).toFormat('cccc d LLLL')
                let buscarDate = arrayPartidos.some(a => a.date === dia)
                if(!buscarDate){
                    arrayPartidos = [...arrayPartidos, {"date": dia, "fixture": [partido]}]
                } else {
                    arrayPartidos.forEach(a => {
                        if(a.date === dia){
                            a.fixture.push(partido)
                        }
                    })
                }    
            })
            setFixtureSlide(resultadoApi.fixture)
            setCurrentFixture(arrayPartidos)
            setCurrentRound(parseInt(resultadoApi.round))
        }
        getCurrentFixture()
    }, [])
    
    return(
        <ApiContext.Provider
            value={{
                news,
                hero,
                teams,
                currentFixture,
                fixtureSlide,
                currentRound,
                totalRounds,
                table,
                statistics
            }}
        >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiProvider