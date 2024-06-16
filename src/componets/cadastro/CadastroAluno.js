import * as React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { HeaderApp } from '../headerApp/HeaderApp';
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
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const CadastroAluno = () => {

  const navigate = useNavigate()
  const [cadastroError, setCadastroError] = useState(false);
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [plano, setPlano] = useState('');
  const [nomeAluno, setNomeAluno] = useState('');
  const [email, setEmail] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [valor, setValor] = useState('');
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await url.post(`/api/aluno/aluno/${id}`, {
        sexo: sexo,
        nome: nomeAluno,
        cpf: cpf,
        dt_nascimento: dataNasc,
        telefone: telefone,
        email: email,
        plano: plano,
        pagamento: {
          dt_pagamento: dataPagamento,
          valor: valor
        }
      });
      if (response.status === 201) {
        console.log('Aluno adicionado com sucesso!');
        setCadastroError()
        navigate(`/dashBoard/${id}`)
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setCadastroError(true);
    }
  };

  const handleDateChange = (novaData) => {
    setDataNasc(novaData);
  };
  const handleDatePagChange = (novaData) => {
    setDataPagamento(novaData);
  };

  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.divDupla} >
          <form style={styles.divCadastro} onSubmit={handleSubmit} >
            <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Dados Pessoais</p>
            <div style={{ marginLeft: 10 }}>
              <div style={{}}>
                <TextField
                  id="nomeTextField"
                  label="Nome"
                  variant="standard"
                  value={nomeAluno}
                  onChange={(e) => setNomeAluno(e.target.value)}
                  inputProps={{
                    inputMode: 'text'
                  }}
                  sx={{ width: 300 }}
                />
              </div>
              <div>
                <TextField
                  id="cpfTextField"
                  label="CPF"
                  variant="standard"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  inputProps={{
                    inputMode: 'numeric'
                  }}
                  sx={{ width: 300 }}
                />
              </div>

              <div>
                <TextField
                  id="telefoneTextField"
                  label="Telefone"
                  variant="standard"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  sx={{ width: 300 }}
                />
              </div>
              <div>
                <TextField
                  id="emailTextField"
                  label="E-Mail"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ width: 300 }}
                />
              </div>
              <div>
                <TextField
                  id="sexoTextField"
                  label="Sexo"
                  variant="standard"
                  select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  sx={{ width: 300 }}
                >
                  <MenuItem value="Masculino" >Masculino</MenuItem>
                  <MenuItem value="Feminino">Feminino</MenuItem>
                  <MenuItem value="Não Informar">Não Informar</MenuItem>
                </TextField>
              </div>

              <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data Nascimento: </p>
                <LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                  <DatePicker
                  id={'dataNascimento'}
                    style={{ borderColor: '' }}
                    format='DD-MM-YYYY'
                    onChange={handleDateChange}
                    value={dataNasc}
                    sx={{ width: 175 }}
                  />
                </LocalizationProvider>
              </div>

            </div>

          </form>

          <form style={styles.divPagamentos} onSubmit={handleSubmit}>

            <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Pagamento</p>
            <div style={{ marginLeft: 10 }}>
              <div>
                <TextField
                  id="planonomeTextField"
                  label="Plano"
                  variant="standard"
                  select
                  value={plano}
                  onChange={(e) => setPlano(e.target.value)}
                  sx={{ width: 300 }}                >
                  <MenuItem value="Mensal" >Mensal</MenuItem>
                  <MenuItem value="Trimestral">Trimestral</MenuItem>
                  <MenuItem value="Semestral">Semestral</MenuItem>
                  <MenuItem value="Anual">Anual</MenuItem>
                </TextField>
              </div>

              <div style={{ marginLeft: -10, marginTop: 5 }}>
                <FormControl fullWidth={false} sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                  <OutlinedInput
                    id="vaorTextField"
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    label="Amount"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    sx={{ width: 150 }}
                  />
                </FormControl>
              </div>

              <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data de Pagamento: </p>
                <LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id={'dataPagamento'}
                    style={{ borderColor: '' }}
                    format='DD-MM-YYYY'
                    onChange={handleDatePagChange}
                    value={dataPagamento}
                    sx={{ width: 150 }}
                  />
                </LocalizationProvider>
              </div>
            </div>

          </form>
        </div>

        <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 40, justifyContent: 'center' }}>
          {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
          <Button
            onClick={handleSubmit}
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} id={'btn'}/> SALVAR ALUNO</Button>
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
    height: '56vh',
    marginTop: 20,
    display: "flex",
    justifyContent: 'space-between',


  },
  divCadastro: {
    backgroundColor: '#f5f3f3',
     width: '48%',
    height: '60vh',
    // flex: 1,
    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    borderRadius: 20,
  },
  divPagamentos: {
    backgroundColor: '#f5f3f3',
    width: '48%',
    height: '45vh',
    // flex: 1,
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
    borderRadius: 50,
    marginTop: 15
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