import React, { useEffect, useState } from 'react'
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
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import url from '../../service/service';
import { useParams } from 'react-router-dom';

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

  const [nomeAluno, setNomeAluno] = useState([]);
  const [status, setStatus] = useState([]);

  const retornaAlunosDb = async () => {
    try {
      const response = await url.get(`/api/aluno/alunos`);
      const alunos = response.data;

      const lRetorno = alunos.reduce((accumulator, aluno) => {
        accumulator.push({
          nome: aluno.nome,
        });
        return accumulator;
      }, []);

      setNomeAluno(lRetorno);

    } catch (error) {
      console.error('Erro ao consultar alunos:', error);
    }
  }



  const retornaStatusPag = async () => {

    try {
      const response = await url.get(`/api/pagamento/pagamentos`);
      const status = response.data;

      const lRetorno = status.map((pag) => ({
        status: pag.status,
      }));
      setStatus(lRetorno);

    } catch (error) {
      console.error('Erro ao consultar Status:', error);
    }
  }

  useEffect(() => {
    retornaAlunosDb();
    retornaStatusPag();
  }, []);

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

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {nomeAluno && status && nomeAluno.length === status.length &&
                nomeAluno.map((item, index) => (

                  <div key={index} style={{ display: "flex", justifyContent: "space-between", width: "96%", }}>

                    <div style={{ width: "32%", display: "flex", justifyContent: "center", }}>
                      <p>{item.nome}</p>
                    </div>

                    <div style={{ width: "32%", display: "flex", justifyContent: "center", alignItems: "center"  }}>
                      {status != "pendente" ? <CancelIcon htmlColor='red'/> : <CheckCircleOutlineIcon htmlColor='green'/>}
                      {/* <p>{status[index].status}</p> */}

                    </div>

                    <div style={{ width: "32%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <div style={{ backgroundColor: 'yellow', margin: 5 }}><PersonOutlineIcon /></div>
                      <div style={{ backgroundColor: 'greenyellow', margin: 5 }}><PaidIcon /></div>
                      <div style={{ backgroundColor: '#59D0F5', margin: 5 }}><FitnessCenterIcon /></div>
                    </div>

                  </div>
                ))}
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
                height="400px" // Altura desejada
              />
            </div>

          </div>
        </div>


        <div style={styles.divButtons}>
          <Button
            component={Link}
            to={`/cadastroAluno/${id}`}
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
    width: "96%",
    // alignItems: "center"
  },
  detalhes: {
    dflexDirection: "row",
    display: "flex",
    justifyContent: 'space-between',
    // marginTop: 20,
    // width: "96%",
    alignItems: "center"
  },
};