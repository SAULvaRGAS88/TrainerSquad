import * as React from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { HeaderApp } from '../headerApp/HeaderApp';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


export const CadastroAluno = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.divDupla}>

          <div style={styles.divCadastro}>
            <p>Dados Pessoais</p>
            <div style={{marginLeft: 10}}>
              <div style={{display: "flex"}}>
                {/* <p>Nome: </p> */}
                <TextField
                            id="standard-basic"
                            label="Nome"
                            variant="standard"
                            InputLabelProps={{
                                
                            }}
                            sx={{
                                //'& label': { color: 'white' },
                                //'& fieldset': { borderColor: 'white' },
                                //color: 'white',
                               // '& input': { color: 'white' }

                            }}
                            //value={usuario}
                            // onChange={(e) => setUsuario(e.target.value)}
                        />
              </div>
              
              <p>CPF: </p>
              <p>Data de Nascimento</p>
              <p>Telefone: </p>
              <p>E-Mail: </p>
              <p>Sexo: </p>
              <p>Status: </p>
            </div>
          </div>

          <div style={styles.divPagamentos}>
            <p>Pagamento</p>
            <div>
              <p>Plano: </p>
              <p>Data de Pagamento: </p>
              <p>Valor: </p>
            </div>
          </div>

        </div>

        <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 20, justifyContent: 'space-between' }}>
          <Button
            component={Link}
            to="/avaliacaoFisica"
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR AVALIAÇÂO FíSICA</Button>

          <Button
            onClick={handleOpen}
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR ALUNO</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box style={styles.style}>
              <Typography id="modal-modal-description" sx={{ mt: 10, mb: 10 }}>
                Aluno Cadastrado com Sucesso!
              </Typography>
            </Box>
          </Modal>

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
  },
  Button: {
    width: '40%',
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
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    display:'flex'
  },
}