import React from 'react';

export default function RandomNumber(props) {
    const { min, max } = props;
    const value = Math.round(Math.random()  * (max - min) + min);
    
    return (
        <div>
            <h2>Número Aleatório Gerado: </h2>
            <p>Valor Min: { min } : valor Máx: { max } : Valor Gerado: { value }</p>
        </div>
    )
}