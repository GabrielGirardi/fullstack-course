import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'

ReactDOM.render(
    <div>
        <First/>
        <WithParameter 
            title="Situação do Aluno" 
            name="Pedro Silva"
            nota={9.3}/>

       
    </div>,
    document.getElementById('root')
)