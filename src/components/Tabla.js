import React from 'react';

const Tabla = ({nombre, equipos}) => {
    return (
        <div className="group-container">
        <h3>{nombre}</h3>
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
                </tr>
            </thead>
            <tbody>
                {equipos.map((equipo,i) => {
                    return(
                        <tr key={i}>
                            <td>{equipo.pos}</td>
                            <td>
                                <img src={equipo.escudo} alt={equipo.equipo} width={22} height={22}/>
                                {equipo.equipo}
                            </td>
                            <td>{equipo.jugados}</td>
                            <td>{equipo.ganados}</td>
                            <td>{equipo.empatados}</td>
                            <td>{equipo.perdidos}</td>
                            <td>{equipo.diferencia}</td>
                            <td>{equipo.puntos}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
};

export default Tabla;