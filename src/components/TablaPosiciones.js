import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import Tabla from './Tabla';

const TablaPosiciones = () => {

    const {resultados} = useContext(ApiContext)


    return (
        <section className="table-container">
            {resultados.status === 'success' ? (
                <Tabla nombre='Posiciones' equipos={resultados.posiciones}></Tabla>
            ) : <p>Cargando</p>}
        </section>
    );
};

export default TablaPosiciones;