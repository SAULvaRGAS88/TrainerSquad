import React from 'react'
import { HeaderApp } from '../headerApp/HeaderApp';
import { Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


export const DashBoard = () => {
  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.BoxDuplo}>

          <div style={styles.infoAlunos}>

          </div>

          <div style={styles.calender}>

          </div>
        </div>

        <div style={styles.divButtons}>
          <Button
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{fontSize: 30}}/> CADASTRAR ALUNO</Button>
          <Button
            style={styles.Button}
            variant="contained"> <AttachMoneyIcon style={{fontSize: 30}}/> CONTROLE DE PAGAMENTO</Button>
          <Button
            style={styles.Button}
            variant="contained"> <FitnessCenterIcon style={{fontSize: 30}}/> CADASTRAR TREINO</Button>
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
  BoxDuplo: {
    width: '95%',
    minHeight: '55vh',
    marginTop: 20,
    display: "flex",
    justifyContent: 'space-between',
  },
  infoAlunos: {
    backgroundColor: '#f5f3f3',
    width: '48%',
    minHeight: '55vh',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20
  },
  calender: {
    backgroundColor: '#f5f3f3',
    width: '48%',
    minHeight: '55vh',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20
  },
  divButtons: {
    marginTop: 20,
    width: "95%",
    display: 'flex',
    justifyContent: 'space-around'
  },
  Button: {
    width: '25%',
    height: 50,
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    backgroundColor: '#f5f3f3',
    color: 'black',
    cursor: 'pointer',
  }
};