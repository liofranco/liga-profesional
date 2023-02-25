import React, {useContext} from 'react';
import { ApiContext } from '../context/ApiContext';

const Tabla = () => {

    const {table} = useContext(ApiContext)

    return (
        <main className="main">
            <div className="page-header">
                <h1>Tabla de posiciones</h1>
            </div>
            <div className="group-container">
                {table.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Equipo</th>
                                <th>J</th>
                                <th>G</th>
                                <th>E</th>
                                <th>P</th>
                                <th>+/-</th>
                                <th>PTS</th>
                                <th className="tabla-forma-container">Forma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((equipo,i) => {
                                return(
                                    <tr key={i}>
                                        <td>{equipo.rank}</td>
                                        <td>
                                            <img src={equipo.team.logo} alt={equipo.team.name} width={22} height={22}/>
                                            {equipo.team.name}
                                        </td>
                                        <td>{equipo.played}</td>
                                        <td>{equipo.win}</td>
                                        <td>{equipo.draw}</td>
                                        <td>{equipo.lose}</td>
                                        <td>{equipo.goalsDiff}</td>
                                        <td>{equipo.points}</td>
                                        <td className="tabla-forma-container">{equipo.form.map((f,i) => {
                                            return(
                                                <p key={i} className={`tabla-forma forma-${f.result}`}>{f.result}</p>
                                            )
                                        })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ): null}
            </div>

        </main>
    );
};

export default Tabla;