import React from 'react'
import { Link } from 'react-router-dom';



export const TelaDash = () => {
  return (
    <div style={styled.container}>
      <h1>
        Tela de DashBoArd
      </h1>
      <Link to="/">Retornar a Página de Login</Link>
    </div>
  )
}
