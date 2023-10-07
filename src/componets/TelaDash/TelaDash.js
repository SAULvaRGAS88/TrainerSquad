import React from 'react'
import { Link } from 'react-router-dom';
import './TelaDash.css'; // Importe o arquivo CSS aqui



export const TelaDash = () => {
  return (
    <div style={styles.container}>
      <h1 style={{color: 'white', fontWeight: 'bold'}}>
        Tela de DashBoArd
      </h1>
      <Link style={{color: 'green', fontWeight: 'bold'}} to="/">Retornar a Página de Login</Link>
      <div className="container2"> 
        <p>AQUI NOVO STYLE</p>
      </div>
    </div>
    
  )
}

const styles = {
  container: {
    backgroundColor: 'blue',  },
};