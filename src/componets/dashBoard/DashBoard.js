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


export const DashBoard = () => {

  const events = [
    { title: 'Meeting', start: new Date() }
  ]

  const { id } = useParams();

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const navigate = useNavigate()
  // const [openAluno, setOpenAluno] = useState(false);
  const [openFinanceiro, setOpenFinanceiro] = useState(false);
  const [openTreino, setOpenTreino] = useState(false);
  const [nomeAluno, setNomeAluno] = useState([]);
  const [status, setStatus] = useState([]);
  // console.log(status)

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


  useEffect(() => {
    retornaAlunosDb();
    retornaStatusPag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
                            navigate(`/treino/${id}`, { state: { itemId: item.id } })
                          }} />
                        </div>
                      </div>

                    </div>
                  )
                }
                return null;
              })}

            </div>

          </div>
          {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <div style={styles.calender}>
            <div >
              <FullCalendar

                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
                height="470px" // Altura desejada
              />
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
  }


};

{/* <Dialog open={openAluno} onClose={() => setOpenAluno(false)}>
          <DialogContent style={styles.customDialogStyle}>
            <h2>Editar Aluno</h2>
            {nomeAluno &&
              nomeAluno
                .filter((aluno) => aluno.id === alunoIdParaEditar)
                .map((aluno, index) => (
                  <div key={index} style={styles.uptadeAluno}>
                    <p style={styles.p}>Nome: {aluno.nome}</p>
                    <input type="text" placeholder="Nome do Aluno" />
                    <p style={styles.p}>Telefone: {aluno.telefone}</p>
                    <input type="text" placeholder="Telefone do Aluno" />
                    <div style={styles.buttonContainer}>
                      <button style={styles.saveButton}>Salvar</button>
                      <button style={styles.closeButton} onClick={() => { setOpenAluno(false) }}>Fechar</button>
                    </div>
                  </div>
                ))}
          </DialogContent>
        </Dialog> */}




{/* <Dialog open={openFinanceiro} onClose={() => setOpenFinanceiro(false)}>
          <DialogContent style={styles.customDialogStyle}>
            <h2>Editar Financeiro</h2>
            <input type="text" placeholder="Nome do Aluno" />
            <input type="text" placeholder="Idade do Aluno" />
            <div>
              <button>Salvar</button> <button onClick={() => { setOpenFinanceiro(false) }}>Fechar</button>
            </div>

          </DialogContent>
        </Dialog>

        <Dialog open={openTreino} onClose={() => setOpenTreino(false)}>
          <DialogContent style={styles.customDialogStyle}>
            <h2>Editar Treino</h2>
            <input type="text" placeholder="Nome do Aluno" />
            <input type="text" placeholder="Idade do Aluno" />
            <div>
              <button>Salvar</button> <button onClick={() => { setOpenTreino(false) }}>Fechar</button>
            </div>

          </DialogContent>
        </Dialog> */}

