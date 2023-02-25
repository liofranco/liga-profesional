import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Partido/Header';
import Navigation from '../components/Partido/Navigation';

const Partido = () => {

    const {partidoId, localId, visitanteId,} = useParams()

    const [apiRequest, setApiRequest] = useState(false)
    const [match, setMatch] = useState([])
    const [alineaciones, setAlineaciones] = useState([])
    const [estadisticas, setEstadisticas] = useState([])

    const id = useMemo(()=>{
        return {partido: partidoId, local: localId, visitante: visitanteId}
    }, [partidoId, localId, visitanteId])

    useEffect(() => {
        const getInfo = async () => {
            const urlPartido = `http://192.168.100.3:5000/api/${id.partido}/${id.local}/${id.visitante}`
            const respuestaPartido = await fetch(urlPartido)
            const resultadoPartido = await respuestaPartido.json()
            setMatch(resultadoPartido.partido)
            setAlineaciones(resultadoPartido.lineups)
            setEstadisticas(resultadoPartido.statistics)
            resultadoPartido.status === 'success' && setApiRequest(true)
        }
        getInfo()
        
    }, [id])

    return (
        <main className="main">
            {apiRequest ? (
                <>
                    <Header match={match} />
                    <Navigation match={match} alineaciones={alineaciones} estadisticas={estadisticas} />
                </>
            ) : <Loading />}
        </main>
    );
};

export default Partido;