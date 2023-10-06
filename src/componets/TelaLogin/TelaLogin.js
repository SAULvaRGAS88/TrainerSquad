import React from 'react'
import { Link } from 'react-router-dom';

export const TelaLogin = () => {
    return (
        <div>
            <h1>
                TelaLogin
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Tela de DashBoArd</Link>
                    </li>
                    <li>
                        <Link to="/cadastro">Tela de Cadastro</Link>
                    </li>
                </ul>
            </nav>
        </div>                                     
    )
}
