import React from 'react'
// import { Link } from 'react-router-dom';
import { HeaderApp } from '../headerApp/HeaderApp';

export const CadastroAluno = () => {
  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.divDupla}>

          <div style={styles.divCadastro}>

          </div>
          <div style={styles.divPagamentos}>

          </div>

        </div>
      </div>
    </div>
  )
}

const styles = {
  containerPrincipal: {
    backgroundColor: '#1F2B45',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  containerSecundaria: {
    backgroundColor: '#E7E7E7',
    width: '90%',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',

  },
  divDupla: {
    width: '95%',
    minHeight: '55vh',
    marginTop: 20,
    display: "flex",
    justifyContent: 'space-between',


  },
  divCadastro: {
    backgroundColor: '#f5f3f3',
    width: '48%',
    minHeight: '55vh',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20,
  },
  divPagamentos: {
    backgroundColor: '#f5f3f3',
    width: '45%',
    height: '25vh',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20,
  }
}