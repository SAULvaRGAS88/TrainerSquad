import * as React from 'react';
import { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { HeaderApp } from '../headerApp/HeaderApp';
// import { Link } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
import url from '../../service/service';
import { useParams } from 'react-router-dom';


export const AvaliacaoFisica = () => {
  const [cadastroError, setCadastroError] = useState(false);
  const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [nome, setNome] = useState('');
  const [dataAval, setDataAval] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [circPunho, setCircPunho] = useState('');
  const [circAbd, setCircAbd] = useState('');
  const [circGluteo, setCircGluteo] = useState('');
  const [porcGordura, setPorcGordura] = useState('');
  const [massaGordura, setMassaGordura] = useState('');
  const [massaMagra, setMassaMagra] = useState('');
  const [porcMassaMusc, setPorcMassaMusc] = useState('');
  const [massaMuscu, setMassaMuscu] = useState('');
  const [ingestaoCalorica, setIngestaoCalorica] = useState('');
  const [taxaMetabolica, setTaxaMetabolica] = useState('');
  const [diferenca, setDiferenca] = useState('');

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await url.post(`/api/avaliacao/${id}`, {
        peso: peso,
        altura: altura,
        nome: nome,
        dt_aval: dataAval,
        sexo: sexo,
        idade: idade,
        circ_punho: circPunho,
        circ_abd: circAbd,
        circ_gluteo: circGluteo,
        porc_gordura: porcGordura,
        massa_gordura: massaGordura,
        massa_magra: massaMagra,
        porc_massa_musc: porcMassaMusc,
        massa_muscu: massaMuscu,
        ingestao_calorica: ingestaoCalorica,
        taxa_metabolica: taxaMetabolica,
        diferenca: diferenca
      });
      if (response.status === 201) {

      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setCadastroError(true);
    }
  };

  const handleDateChange = (novaData) => {
    setDataAval(novaData);
  };

    return (
        <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        <div style={styles.divDupla} >
          <form style={styles.divCadastro} onSubmit={handleSubmit} >
            <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Avaliação Física</p>
            <div style={{ marginLeft: 10 }}>
              <div style={{}}>
                <TextField
                  id="standard-basic"
                  label="Peso"
                  variant="standard"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  inputProps={{
                    inputMode: 'numeric'
                  }}
                  sx={{ width: 300 }}
                />
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Altura"
                  variant="standard"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  inputProps={{
                    inputMode: 'numeric'
                  }}
                  sx={{ width: 300 }}
                />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Nome"
                  variant="standard"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  inputProps={{
                    inputMode: 'text'
                  }}
                  sx={{ width: 300 }}
                />
              </div>
              <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data Avaliação: </p>
                <LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                  <DatePicker
                    style={{ borderColor: 'red' }}
                    format='DD-MM-YYYY'
                    onChange={handleDateChange}
                    value={dataAval}
                    sx={{ width: 175 }}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Sexo"
                  variant="standard"
                  select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  sx={{ width: 300 }}
                >
                  <MenuItem value="1" >Masculino</MenuItem>
                  <MenuItem value="0">Feminino</MenuItem>
                  <MenuItem value="2">Não Informar</MenuItem>
                </TextField>
              </div>
              <div>
                <TextField
                  id="standard-basic"
                  label="Idade"
                  variant="standard"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  sx={{ width: 300 }}
                />
              </div>

            </div>

          </form>

          <form style={styles.divPagamentos} onSubmit={handleSubmit}>
            <div style={{ marginLeft: 10 }}>
              <div>
                <TextField
                  id="standard-basic"
                  label="Circunferência Punho"
                  variant="standard"
                  value={circPunho}
                  onChange={(e) => setCircPunho(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Circunferência Abdominal"
                  variant="standard"
                  value={circAbd}
                  onChange={(e) => setCircAbd(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Circunferência Glúteo"
                  variant="standard"
                  value={circGluteo}
                  onChange={(e) => setCircGluteo(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Porcentagem Gordura"
                  variant="standard"
                  value={porcGordura}
                  onChange={(e) => setPorcGordura(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Massa Gordura"
                  variant="standard"
                  value={massaGordura}
                  onChange={(e) => setMassaGordura(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Massa Magra"
                  variant="standard"
                  value={massaMagra}
                  onChange={(e) => setMassaMagra(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Porcentagem Massa Muscular"
                  variant="standard"
                  value={porcMassaMusc}
                  onChange={(e) => setPorcMassaMusc(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Massa Muscular"
                  variant="standard"
                  value={massaMuscu}
                  onChange={(e) => setMassaMuscu(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Ingestão Calórica"
                  variant="standard"
                  value={ingestaoCalorica}
                  onChange={(e) => setIngestaoCalorica(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Taxa Metabólica"
                  variant="standard"
                  value={taxaMetabolica}
                  onChange={(e) => setTaxaMetabolica(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Diferença"
                  variant="standard"
                  value={diferenca}
                  onChange={(e) => setDiferenca(e.target.value)}
                  sx={{ width: 300 }}                >
                </TextField>
              </div>
            </div>

          </form>
        </div>

        <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 20, justifyContent: 'space-between' }}>
          {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
          <Button
            onClick={handleSubmit}
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR AVALIAÇÂO FíSICA</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box style={styles.style}>
              <Typography id="modal-modal-description" sx={{ mt: 10, mb: 10 }}>
                Avaliação cadastrada com sucesso!
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
      height: '70vh',
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