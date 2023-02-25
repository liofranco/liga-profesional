import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';

const TablaHome = () => {

    const {table} = useContext(ApiContext)

    return (
        <div className="tabla-home">
            <h3>Posiciones</h3>
            <table className="table ">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Equipo</th>
                        <th>J</th>
                        <th>Dif</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {table.slice(0,5).map((equipo,i) => {
                        return(
                            <tr key={i}>
                                <td>{equipo.rank}</td>
                                <td>
                                    <img src={equipo.team.logo} alt={equipo.team.name} width={22} height={22}/>
                                    {equipo.team.name}
                                </td>
                                <td>{equipo.played}</td>
                                <td>{equipo.goalsDiff}</td>
                                <td>{equipo.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/tabla' className="fulltable-button">Ver tabla completa</Link>
        </div>
    );
};

export default TablaHome;