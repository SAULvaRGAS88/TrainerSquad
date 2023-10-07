import React from 'react'
import { Link } from 'react-router-dom';

export const ControlePagamento = () => {
    return (
        <div>
            <h1>Controle de Pagamento</h1>

            <div>
                <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Tela de DashBoArd</Link>
            </div>
        </div>
    )
}
