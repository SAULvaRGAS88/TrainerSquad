import React, { useEffect, useState } from 'react';
import { HeaderApp } from '../headerApp/HeaderApp';
import { useParams, useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import url from '../../service/service';
import TodayIcon from '@mui/icons-material/Today';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';

export const DashBoard = () => {

  const { id } = useParams();
  const navigate = useNavigate()
  const [nomeAluno, setNomeAluno] = useState([]);
  const [status, setStatus] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [cadastroError, setCadastroError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [GetId, setGetId] = useState('');
  const [dadosTarefas, setDadosTarefas] = useState([]);
  const [modalOpenEvento, setModalOpenEvento] = useState(false);
  // const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [eventosDoDia, setEventosDoDia] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  const events = dadosTarefas.map((tarefa) => ({
    title: tarefa.tarefa || 'Sem Título',
    start: `${tarefa.data || ''}T${tarefa.hora || ''}`,
    extendedProps: {
      nomeAluno: tarefa.nomealuno || 'Sem Nome',
      hora: tarefa.hora || 'Sem Hora', // Adicione esta linha
    },
  }));

  const handleDateClick = (arg) => {
    const eventosNesseDia = events.filter(
      (evento) =>
        new Date(evento.start).toDateString() === new Date(arg.event.start).toDateString()
    );
  
    setDiaSelecionado(arg.event.start);
    setEventosDoDia(eventosNesseDia);
    setModalOpenEvento(true);
  };
  

  const handleModalClose = () => {
    setModalOpenEvento(false);
  };

  const retornaAlunosDb = async () => {
    try {
      const response = await url.get(`/api/aluno/${id}/aluno`);
      setNomeAluno(response.data.map(aluno => ({
        nome: aluno.nome,
        id: aluno.id,
        telefone: aluno.telefone,
        idusuario: aluno.idusuario
      })));
    } catch (error) {
      console.error('Erro ao consultar alunos:', error);
    }
  }

  const retornaStatusPag = async () => {
    try {
      const response = await url.get(`/api/aluno/${id}/pag`);
      setStatus(response.data.map(statusItem => ({
        status: statusItem.status,
        id_aluno: statusItem.id_aluno
      })));
    } catch (error) {
      console.error('Erro ao consultar Status:', error);
    }
  }

  const SalvarEventos = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (GetId) {
        const response = await url.post(`/api/task/${GetId}`, {
          data: data,
          hora: hora,
          tarefa: tarefa
        });
        if (response.status === 201) {
          console.log('Evento adicionado com sucesso!');
          setCadastroError();
          setModalOpen(false);
          navigate(`/dashBoard/${id}`);
        }
      } else {
        console.error('ID inválido.');
        setCadastroError(true);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setCadastroError(true);
    } finally {
      setLoading(false);
    }
  };

  const retornaTarefasGeral = async () => {
    try {

      const response = await url.get(`/api/task/${id}`);
      const retornaTarefas = response.data;

      const lRetorno = retornaTarefas.map(item => ({
        data: item.data,
        hora: item.hora,
        tarefa: item.tarefa,
        nomealuno: item.nomealuno,
      }));
      setDadosTarefas(lRetorno);
    } catch (error) {
      console.error('Erro ao consultar Tarefas', error);
    }
  };

  useEffect(() => {
    retornaTarefasGeral()
    retornaAlunosDb();
    retornaStatusPag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, GetId]);

  return (
    <div style={styles.containerPrincipal}>
      <div style={styles.containerSecundaria}>
        <HeaderApp />

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div style={styles.BoxDuplo}>

          <div style={styles.infoAlunos}>
            <div style={{ display: "flex", flexDirection: "column", width: "-webkit-fill-available", alignItems: "center" }}>
              <div style={styles.divTile}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: 16 }}>LISTA DE ALUNOS</p>
              </div>

              <div style={styles.divdetalhes}>

                <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{}}>Nome</p></div>
                <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p>Pagamento</p></div>
                <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p >Editar</p></div>

              </div>

            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxHeight: "300px", overflowY: "auto" }}>

              {nomeAluno && status && nomeAluno.map((item, index) => {
                const alunoId = item.id;
                const statusItem = status.concat(statusItem => statusItem.id_aluno === alunoId)
                if (statusItem) {
                  return (

                    <div key={index} style={{ display: "flex", justifyContent: "space-between", width: "96%" }}>

                      <div style={{ width: "32%", display: "flex", justifyContent: "center" }}>
                        <p>{item.nome}</p>
                      </div>

                      <div style={{ width: "32%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {statusItem && statusItem[index] && statusItem[index].status && statusItem[index].status.trim().toLowerCase() === "pendente" ? (
                          <CancelIcon style={{ color: 'red' }} />
                        ) : (
                          <CheckCircleOutlineIcon style={{ color: 'green' }} />
                        )}



                      </div>

                      <div style={{ width: "32%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ backgroundColor: 'yellow', margin: 5, cursor: "pointer", display: "flex" }}
                          onClick={() => {
                            navigate(`/editarAluno/${id}`, { state: { itemId: item.id } })
                            console.log(statusItem.id_aluno, 'id')
                          }}

                        >
                          <PersonOutlineIcon />
                        </div>
                        <div style={{ backgroundColor: 'greenyellow', margin: 5, cursor: "pointer", display: "flex" }}><FavoriteIcon
                          onClick={() => {
                            navigate(`/ListaAvaliacaoFisica/${id}`, { state: { itemId: item.id } })
                          }} />
                        </div>
                        <div style={{ backgroundColor: '#59D0F5', margin: 5, cursor: "pointer", display: "flex" }}><FitnessCenterIcon
                          onClick={() => {
                            navigate(`/treinos/${id}`, { state: { itemId: item.id } })
                          }} />
                        </div>

                        <div style={{ backgroundColor: '#cc3affa8', margin: 5, cursor: 'pointer', display: 'flex' }}>
                          <TodayIcon
                            onClick={() => {
                              setModalOpen(true);
                              setGetId(item.id)
                            }}
                          />
                        </div>


                      </div>

                      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
                        <DialogTitle>Adicionar Evento</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <label>Data:</label>
                            <input type="date" value={data} onChange={(e) => setData(e.target.value)} style={styles.inputStyle} />

                            <label>Hora:</label>
                            <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} style={styles.inputStyle} />

                            <label>Evento:</label>
                            <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} style={styles.inputStyle} />
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={SalvarEventos} disabled={!GetId}>Salvar</Button>
                          <Button onClick={() => setModalOpen(false)}>Fechar</Button>
                        </DialogActions>
                      </Dialog>

                    </div>
                  )
                }
                return null;
              })}

            </div>

          </div>
          <Box sx={{ position: "relative" }}>
            {loading && (
              <div style={styles.loadingOverlay}>
                <CircularProgress />
              </div>
            )}
          </Box>
          {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div style={styles.calender}>
            <div>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                height="470px"
                eventClick={handleDateClick}
              />
              <Modal
                open={modalOpenEvento}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    p: 2,
                  }}
                >
                  <h2>Agenda do Dia: {diaSelecionado && diaSelecionado.toLocaleDateString()}</h2>
                  {eventosDoDia.map((evento) => (
                    <div key={evento.title} style={styles.divModal}>
                      <p>Tarefa: {evento.title}</p>
                      <p>Aluno: {evento.extendedProps.nomeAluno}</p>
                      <p>Hora: {evento.extendedProps.hora}</p> {/* Ajuste esta linha */}
                    </div>
                  ))}
                  <Button onClick={handleModalClose}>Fechar</Button>
                </Box>
              </Modal>
            </div>

          </div>
        </div>
      </div>
    </div >

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
    minHeight: '65vh',
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
    minHeight: '65vh',
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
    width: "96%",
  },
  detalhes: {
    dflexDirection: "row",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  customDialogStyle: {
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  uptadeAluno: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "300px",
    margin: "0 auto",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },

  saveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    marginRight: "10px",
    cursor: "pointer",
  },

  closeButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  p: {
    margin: 0
  },
  inputStyle: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  loadingOverlay: {
    position: 'absolute',
    top: -30,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.8)',
  },
  divModal:{
    borderBottom: '2px solid #1976d2',
  }
};