import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div>
            <h1>
                Tela de Login
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Tela de DashBoArd</Link>
                    </li>
                </ul>
            </nav>
        </div>                                     
    )
}
