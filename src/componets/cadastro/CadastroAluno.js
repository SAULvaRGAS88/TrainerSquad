import React from 'react'
import { Link } from 'react-router-dom';

export const CadastroAluno = () => {
  return (
    <div>
      <h1>
        Tela de Cadastro
      </h1>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Tela de DashBoard</Link>
      </div>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/controlePagamento">Página de Controle de Pagamento</Link>
      </div>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/treino">Página de Treino</Link>
      </div>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/avaliacaoFisica">Página de Avaliação Física</Link>
      </div>

    </div>
  )
}
