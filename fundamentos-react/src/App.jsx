import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import RandomNumber from "./components/basics/RandomNumber"
import Card from "./components/layout/Card"


export default function  App() {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Card title="#4 - Número Aleatório">
                <RandomNumber
                    min={0}
                    max={100}
                />
            </Card>

            <Card title="#3 - Fragmentos">
                <Fragments/>
            </Card>

            <Card title="#2 - Com Parâmetro">
                <WithParameter
                    title="Situação do Aluno" 
                    name="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card title="#1 -  Primeiro Componente">
                <First/>
            </Card>
        </div>
    )
}
