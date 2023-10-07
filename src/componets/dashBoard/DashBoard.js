import React from 'react'
import { Link } from 'react-router-dom';

export const DashBoard = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ color: 'black', fontWeight: 'bold' }}>
        Tela de DashBoard
      </h1>

      <div>
      <Link style={{ color: 'green', fontWeight: 'bold' }} to="/dashboard">Página de DashBoard</Link>
      </div>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/login">Login</Link>
      </div>

      <div>
        <Link style={{ color: 'green', fontWeight: 'bold' }} to="/cadastroAluno">Página de Cadastro</Link>
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

const styles = {
  container: {
    backgroundColor: 'transparent',
  },
};