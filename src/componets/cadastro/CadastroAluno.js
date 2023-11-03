import * as React from 'react';
import { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { HeaderApp } from '../headerApp/HeaderApp';
import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import url from '../../service/service';
import { useNavigate } from 'react-router-dom';

export const CadastroAluno = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [plano, setPlano] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');

  const [id, setId] = useState('');
  // const [dtNasc, setDtNasc] = useState('');
  const [valor, setValor] = useState('');
  // const [dtPag, setDtPag] = useState('');
  const [cadastroError, setCadastroError] = useState(false);
  const navigate = useNavigate();

  const formatCpf = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedCpf = numericValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );
    return formattedCpf;
  };
  const handleCpfChange = (e) => {
    const inputValue = e.target.value;
    const formattedCpf = formatCpf(inputValue);
    setCpf(formattedCpf);
  };

  const formatTelefone = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedTelefone = numericValue.replace(
      /(\d{2})(\d)(\d{4})(\d{4})/,
      '($1) $2 $3-$4'
    );
    return formattedTelefone;
  };

  const handleTelefoneChange = (e) => {
    const inputValue = e.target.value;
    const formattedTelefone = formatTelefone(inputValue);
    setTelefone(formattedTelefone);
  };

  const handleSexoChange = (event) => {
    setSexo(event.target.value);
  };
  const handlePlanoChange = (event) => {
    setPlano(event.target.value);
  };
  const handleNomeAlunoChange = (event) => {
    setNomeAluno(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await url.get(`/api/personal/${id}`);
        //teste
        if (response.status === 200) {
          const response = await url.post(`/api/aluno/${id}`, {
              sexo: sexo,
              nome: nomeAluno,
              cpf: cpf,
              // dt_nascimento: dtNasc,
              telefone: telefone,
              email: email,
              plano: plano,
              pagamento: {
                valor: valor,
                // dt_pagamento: dtPag,
              }
  
          });
  
          if (response.status === 201) {
              navigate('/dashboard');
          }
        } else {
          setCadastroError(true);
        }
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        setCadastroError(true);
    }
};

  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.divDupla}>

          <div style={styles.divCadastro}>
            <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Dados Pessoais</p>
            <div style={{ marginLeft: 10 }}>

              <form onSubmit={handleSubmit}>
                <div style={{}}>
                  <TextField
                    id="standard-basic"
                    label="Nome"
                    variant="standard"
                    value={nomeAluno}
                    onChange={handleNomeAlunoChange}
                    inputProps={{
                      inputMode: 'text'
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="CPF"
                    variant="standard"
                    value={cpf}
                    onChange={handleCpfChange}
                    inputProps={{
                      inputMode: 'numeric'
                    }}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Telefone"
                    variant="standard"
                    value={telefone}
                    onChange={handleTelefoneChange}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="E-Mail"
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Sexo"
                    variant="standard"
                    select
                    value={sexo}
                    onChange={handleSexoChange}
                    sx={{ width: 195 }}
                  >
                    <MenuItem value="Masculino" >Masculino</MenuItem>
                    <MenuItem value="Feminino">Feminino</MenuItem>
                    <MenuItem value="Não Informar">Não Informar</MenuItem>
                  </TextField>
                </div>
                <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                  <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data Nascimento: </p>
                  {<LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                    <DatePicker style={{ borderColor: 'red' }} format='DD-MM-YYYY' />
                  </LocalizationProvider>}
                </div>
                <div>
                  <TextField
                    type="hidden"
                    id="standard-basic"
                    label="Id"
                    variant="standard"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          <div style={styles.divPagamentos}>
            <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Pagamento</p>
            <div style={{ marginLeft: 10 }}>
              <form>
                <div>
                  <TextField
                    id="standard-basic"
                    label="Plano"
                    variant="standard"
                    select
                    value={plano}
                    onChange={handlePlanoChange}
                    sx={{ width: 195 }}
                  >
                    <MenuItem value="Mensal" >Mesal</MenuItem>
                    <MenuItem value="Trimestral">Trimestral</MenuItem>
                    <MenuItem value="Semestral">Semestral</MenuItem>
                    <MenuItem value="Anual">Anual</MenuItem>
                  </TextField>
                </div>
                <div style={{marginLeft: -10, marginTop: 5}}>
                  <FormControl fullWidth={false} sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start" onChange={(e) => setValor(e.target.value)}>R$</InputAdornment>}
                      label="Amount"
                    />
                  </FormControl>
                </div>
                <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                  <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data de Pagamento: </p>
                  {<LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                    <DatePicker style={{ borderColor: 'red' }} format='DD-MM-YYYY'/>
                  </LocalizationProvider>}
                </div>
              </form>
            </div>
          </div>

        </div>

        <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 20, justifyContent: 'space-between' }}>
          <Button
            component={Link}
            to="/avaliacaoFisica"
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR AVALIAÇÂO FíSICA</Button>
          
          {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
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
    minHeight: '56vh',
    marginTop: 20,
    display: "flex",
    justifyContent: 'space-between',


  },
  divCadastro: {
    backgroundColor: '#f5f3f3',
    width: '48%',
    height: '50vh',
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20,
  },
  divPagamentos: {
    backgroundColor: '#f5f3f3',
    width: '45%',
    height: '33vh',
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
    display: 'flex'
  },
}