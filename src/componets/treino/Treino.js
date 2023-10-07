import React from 'react'
import { Link } from 'react-router-dom';

export const Treino = () => {
    return (
        <div>
            <h1>
                Treino
            </h1>

            <div>
                <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Página de DashBoard</Link>
            </div>
        </div>
    )
}
