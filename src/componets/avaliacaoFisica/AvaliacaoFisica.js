import React from 'react'
import { Link } from 'react-router-dom';

export const AvaliacaoFisica = () => {
    return (
        <div>
            <h1>
                Avaliação Física
            </h1>

            <div>
                <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Página de DashBoard</Link>
            </div>

        </div>
    )
}
