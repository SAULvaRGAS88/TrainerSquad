import React from 'react'
import { HeaderApp } from '../headerApp/HeaderApp';
import { Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export const DashBoard = () => {

  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.BoxDuplo}>

          <div style={styles.infoAlunos}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={styles.divTile}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: 16 }}>LISTA DE ALUNOS</p>
              </div>
              <div style={styles.divdetalhes}>
                <p style={{ marginLeft: 30 }}>Nome</p>
                <p>Pagamento</p>
                <p style={{ marginRight: 30 }}>Editar</p>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={styles.detalhes}>

                <div style={{ display: 'flex', width: "32%" }}>Fulano Meneszes da silva</div>

                <div style={{ width: "32%", display: "flex", justifyContent: "center" }}> <CancelIcon sx={{ color: "red" }} /></div>

                <div style={{ display: "flex", justifyContent: "flex-end", width: "32%" }}>
                  <div style={{ backgroundColor: 'yellow', margin: 5 }}><PersonOutlineIcon /></div>
                  <div><PaidIcon style={{ backgroundColor: 'greenyellow', margin: 5 }} /></div>
                  <div><FitnessCenterIcon style={{ backgroundColor: '#59D0F5', margin: 5 }} /></div>
                </div>

              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", }}>
              <div style={styles.detalhes}>
                <div style={{ marginLeft: 30 }}>Ciclana Fantinel</div>

                <div> <CheckCircleOutlineIcon sx={{ color: "green" }} /></div>

                <div style={{ display: "flex", marginRight: 30 }}>
                  <div style={{ backgroundColor: 'yellow', margin: 5 }}><PersonOutlineIcon /></div>
                  <div><PaidIcon style={{ backgroundColor: 'greenyellow', margin: 5 }} /></div>
                  <div><FitnessCenterIcon style={{ backgroundColor: '#59D0F5', margin: 5 }} /></div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={styles.detalhes}>
                <div style={{ marginLeft: 30 }}>Beltrano Teixeira </div>

                <div> <CancelIcon sx={{ color: "red" }} /></div>

                <div style={{ display: "flex", marginRight: 30 }}>
                  <div style={{ backgroundColor: 'yellow', margin: 5 }}><PersonOutlineIcon /></div>
                  <div><PaidIcon style={{ backgroundColor: 'greenyellow', margin: 5 }} /></div>
                  <div><FitnessCenterIcon style={{ backgroundColor: '#59D0F5', margin: 5 }} /></div>
                </div>
              </div>
            </div>

          </div>

          <div style={styles.calender}>

          </div>
        </div>

        <div style={styles.divButtons}>
          <Button
            component={Link}
            to="/cadastroAluno"
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR ALUNO</Button>
          <Button
            component={Link}
            to="/controlePagamento"
            style={styles.Button}
            variant="contained"> <AttachMoneyIcon style={{ fontSize: 40, color: 'green' }} /> CONTROLE DE PAGAMENTO</Button>
          <Button
            component={Link}
            to="/treino"
            style={styles.Button}
            variant="contained"> <FitnessCenterIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR TREINO</Button>
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
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    borderRadius: 50
  },
  divTile: {
    display: "flex",
    justifyContent: 'space-between',

  },
  divdetalhes: {
    dflexDirection: "row",
    display: "flex",
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomColor: "grey",
    borderBottomStyle: 'solid',
    borderWidth: 'thin',
    width: "95%",
    alignItems: "center"
  },
  detalhes: {
    dflexDirection: "row",
    display: "flex",
    justifyContent: 'space-between',
    marginTop: 20,
    width: "96%",
    alignItems: "center"
  },
};