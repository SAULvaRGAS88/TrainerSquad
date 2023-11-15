import React, { useState, useEffect } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Button, Dialog, DialogContent } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import url from '../../service/service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



export const ControlePagamento = () => {


    const { id } = useParams();


    const navigate = useNavigate()
    // const [openAluno, setOpenAluno] = useState(false);
    const [nomeAluno, setNomeAluno] = useState([]);

    const [pagamento, setPagamentos] = useState([]);
    const [status, setStatus] = useState([]);

    const [openAluno, setOpenAluno] = useState(false);
    const [openPagamento, setOpenPagamento] = useState(false);

    const retornaAlunosDb = async () => {
        try {
            const response = await url.get(`/api/aluno/${id}/aluno`)
            const alunos = response.data;

            const lRetorno = [];
            for (let i = 0; i < alunos.length; i++) {
                lRetorno.push({
                    nome: alunos[i].nome,
                    id: alunos[i].id,
                    telefone: alunos[i].telefone,
                    plano: alunos[i].plano,
                    idusuario: alunos[i].idusuario
                });
            }

            setNomeAluno(lRetorno);
            console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar alunos:', error);
        }
    }

    const retornaPag = async () => {
        try {
            const response = await url.get(`/api/aluno/${id}/pag`);
            const pag = response.data;

            const lRetorno = [];
            for (let i = 0; i < pag.length; i++) {
                lRetorno.push({
                    dt_pagamento: pag[i].dt_pagamento,
                    status: pag[i].status,
                    valor: pag[i].valor,
                });
            }

            setPagamentos(lRetorno);
            console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar Status:', error);
        }
    }

    useEffect(() => {
        retornaAlunosDb();
        retornaPag();
    }, []);




    const [pagamentoIdParaEditar, setPagParaEditar] = useState(null);
    const [alunoIdParaEditar, setAlunoIdParaEditar] = useState(null);

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                {/* <div style={styles.buscar}>
                        <Link to={`/alunos/${id}`} style={{ textDecoration: 'none', color: 'black' }}> 
                        </Link>
                    <div style ={styles.divIcon}>
                        <SearchIcon style={{ fontSize: 20, color: 'green' }} />
                    </div>
                </div> */}
                <div style={styles.infoAlunos}>
                    <div style={{ display: "flex", flexDirection: "column", width: "-webkit-fill-available", alignItems: "center" }}>
                        <div style={styles.divTile}>
                            <p style={{ margin: 0, fontWeight: 'bold', fontSize: 16 }}>LISTA DE ALUNOS</p>
                        </div>
                        <div style={styles.divdetalhes}>
                            <div style={{ width: '32%', display: "flex", justifyContent: "center" }}><p style={{ margin: 10,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between"}}>Nome Do Aluno</p></div>
                            <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{ margin: 10, marginRight: 80, fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "center"}} >Plano</p></div>
                            <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{ margin: 10, marginLeft: 40, fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "center"}} >Data de Pagamento</p></div>
                            <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{ margin: 10, marginLeft: 40,fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "center"}} >Status </p></div>
                            <div style={{ width: "32%", display: "flex", justifyContent: "center"}}><p style={{ margin: 10,  marginLeft: 80, fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "center"}} >Valor</p></div>
                            <div style={{ width: "32%", display: "flex", justifyContent: "center"}}><p style={{ margin: 10,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "right"}} >Ação</p></div>
                        </div>

                        <div style={styles.divDadosAlunos}>
                            {nomeAluno && pagamento && nomeAluno.map((item, index) => {
                                const alunoId = item.id;
                                const statusItem = pagamento.concat(statusItem => statusItem.id_aluno === alunoId)
                                if (statusItem) {
                                    return (
                                        <div key={index} style={{display: "flex", justifyContent: "space-between", width: "100%" }}>
                                            <p style={{ margin: 0,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between" }}>{item.nome}</p>
                                            <p style={{ margin: 0,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between" }}>{item.plano}</p>
                                            <p style={{ margin: 0,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between" }} >{statusItem[index].dt_pagamento}</p>
                                            <p style={{ margin: 0,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between" }}>{statusItem[index].status}</p>
                                            <p style={{ margin: 0,  fontSize: 16, fontFamily: "serif", width: "100%",  display: "flex", justifyContent: "space-between" }}>{statusItem[index].valor}</p>
                                            <div style={{ backgroundColor: 'green', margin: 5, cursor: "pointer", display: "flex" }}
                        onClick={() => {
                          navigate(`/editarAluno/${id}`, { id })
                        }}
                      >
                        <AttachMoneyIcon />
                      </div>
                                        </div>
                                    )
                                }
                                return null;
                            })}
                        </div>
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
        overflow: "hidden",
    },
  

    infoAlunos: {
        backgroundColor: '#f5f3f3',
        width: '90%',
        minHeight: '55vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 10,
        marginTop: 20,
        overflow: "hidden",
        color: "black",
        fontFamily: "serif",
        fontSize: 16,

    },
    divdetalhes: {
        display: "flex",
        width: '96%',
        alignItems: "center",
        overflowY: "auto",
        padding: '5px',
        margin: 0,
        justifyContent: "center",
        float: "center",
        borderBottomColor: "grey",
        borderBottomStyle: 'solid',
        borderWidth: 'thin',
        overflowY: "auto",
  
    },
    divDadosAlunos: {
        display: "flex",
        width: '96%',
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "300px",
        overflowY: "auto",
        padding: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        margin: 10,
        justifyContent: "center",
        float: "center"
    },
   

    divTile: {
        display: "flex",
        justifyContent: 'space-between',
        marginTop: 20,

    },
   

   

}