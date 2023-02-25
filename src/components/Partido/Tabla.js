import React, { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

const Tabla = ({match}) => {

    const {table} = useContext(ApiContext)

    return (
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
                        {table.map((equipo, i) => {
                            let home = equipo.team.name === match.teams.home.name
                            let away = equipo.team.name === match.teams.away.name
                            return (
                                <tr className={`${(home || away) && "table-current-teams" }`} key={i}>
                                    <td>{equipo.rank}</td>
                                    <td>
                                        <div className="table-img-container">
                                            <img src={equipo.team.logo} alt={equipo.team.name} width={22} height={22} />
                                        </div>
                                        {equipo.team.name}
                                    </td>
                                    <td>{equipo.played}</td>
                                    <td>{equipo.win}</td>
                                    <td>{equipo.draw}</td>
                                    <td>{equipo.lose}</td>
                                    <td>{equipo.goalsDiff}</td>
                                    <td>{equipo.points}</td>
                                    <td className="tabla-forma-container">{equipo.form.map((f, i) => {
                                        return (
                                            <p key={i} className={`tabla-forma forma-${f.result}`}>{f.result}</p>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : null}
        </div>
    );
};

export default Tabla;