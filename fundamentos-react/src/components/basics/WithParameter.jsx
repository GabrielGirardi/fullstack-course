import React from 'react'

export default function WithParameter(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>{ props.name } tem nota {props.nota} </p>
            <span>Situação: { status }</span>
        </div>
    )
}