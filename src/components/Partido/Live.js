import React from 'react';
import { DateTime } from 'luxon';

const Live = ({match}) => {
    
    const Status = () => {
        let date = DateTime.fromISO(match.date)
        if(date.minute === 1 ){
            date.c.minute = 0
        }
        if(match.status.includes('directo')){
            let time = match.status.slice(9,-1)
            return <p className="">En juego {time}</p>
        } else if(match.status.includes('desc')){
            return <p className="">ET</p>
        } else if(match.status.includes('finalizado')){
            return <p className="">Final</p>
        } else if(match.status.includes('apl')){
            return <p className="">Postergado</p>
        }
    }

    return (
        <Status />
    );
};

export default Live;