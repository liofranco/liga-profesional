import React, { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext()

const ApiProvider = (props) => {

    const [resultados, setResultados] = useState([])
    const [goleadores, setGoleadores] = useState([])

    useEffect(() => {
        const apiHome = async () => {
            const url = `http://localhost:5000/api`
            const respuesta = await fetch(url)
            const resultadoApi = await respuesta.json()
            setResultados(resultadoApi)
            setGoleadores(resultadoApi.goleadores.slice(0,5))
        }
        apiHome()
    }, [])
    
    return(
        <ApiContext.Provider
            value={{
                resultados,
                goleadores
            }}
        >
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiProvider