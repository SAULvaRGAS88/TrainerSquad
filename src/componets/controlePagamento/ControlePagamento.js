import React,{useState, useEffect} from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Button,  Dialog, DialogContent } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import url from '../../service/service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';




export const ControlePagamento = () => {
const { id } = useParams();

const [nomeAluno, setNomeAluno] = useState([]);

const [pagamento, setPagamentos] = useState([]);
const [dt_pagamento, setDt_Pagamento] = useState([]);
const [valor_pagamento, setValor_Pagamento] = useState([]);
const [statusPagamento, setStatus_Pagamento] = useState([]);
const [openAluno, setOpenAluno] = useState(false);
const [openPagamento, setOpenPagamento] = useState(false);

const retornaAlunosDb = async () => {
    try {
        const response = await url.get(`/api/aluno/alunos`);
        const alunos = response.data;

        const lRetorno = [];
        for (let i = 0; i < alunos.length; i++) {
            lRetorno.push({
            nome: alunos[i].nome,
            id: alunos[i].id,
            telefone: alunos[i].telefone,
                });
            }

        setNomeAluno(lRetorno);
        console.log(lRetorno);
        } catch (error) {
        console.error('Erro ao consultar alunos:', error);
        }
}

const retornaPagamento = async () => {
    try {
        const response = await url.get(`/api/pagamento/pagamentos`);
        const pagamentos = response.data;

        const lRetorno = [];
        for (let i = 0; i < pagamentos.length; i++) {
            lRetorno.push({
            dt_pagamento: pagamentos[i].dt_pagamento,
            status: pagamentos[i].status,
            valor: pagamentos[i].valor,
            });
        }
        setPagamentos(lRetorno);
        console.log(lRetorno);
        setDt_Pagamento(lRetorno);
        console.log(lRetorno);
        setValor_Pagamento(lRetorno);
        console.log(lRetorno);
        setStatus_Pagamento(lRetorno);
        console.log(lRetorno)
        } catch (error) {
        console.error('Erro ao consultar Pagamentos:', error);
        }
       
        
    }

useEffect(() => {
    retornaAlunosDb();
    retornaPagamento();
   
}, []);

const [pagamentoIdParaEditar,setPagParaEditar] = useState(null);
const [alunoIdParaEditar, setAlunoIdParaEditar] = useState(null);

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <div style={styles.buscar}>
                        <Link to={`/alunos/${id}`} style={{ textDecoration: 'none', color: 'black' }}> 
                        </Link>
                    <div style ={styles.divIcon}>
                        <SearchIcon style={{ fontSize: 20, color: 'green' }} />
                    </div>
                </div>
                <div style={styles.infoAlunos}>
                    <div style={{ display: "flex", flexDirection: "column", width: "-webkit-fill-available", alignItems: "center" }}>
                    <div style={styles.divTile}>
                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: 16 }}>LISTA DE ALUNOS</p>
                    </div>
                    <div style={styles.divdetalhes}>
                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{}}>Nome Do Aluno</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "left" }}><p >Data Pagamento</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "left" }}><p >Status</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "left" }}><p >Valor</p></div>
                    </div>
                
                    <div style={styles.divinfoAlunosNomeAluno}>
                        {nomeAluno && dt_pagamento && statusPagamento && valor_pagamento && nomeAluno.length === statusPagamento.length &&
                                nomeAluno.map((item, index) => (
                                <div key={index} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                                        <p>{item.nome}</p>
                                    </div >
                                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                                       <p>{pagamento.dt_pagamento}</p>
                                    </div >
                                    <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        {pagamento.status !== "pendente" ? <CancelIcon htmlColor='red' /> : <CheckCircleOutlineIcon htmlColor='green' />}
                                    </div>
                                    <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                                       <p>{pagamento.valor_pagamento}</p>
                                    </div >
                                    
                                    <div style={styles.edicaoPagamento}>
                                            <div style={{ backgroundColor: 'green', margin: 5, cursor: "pointer" }} onClick={() => {
                                                    setPagParaEditar(item.id);
                                                    setOpenPagamento(true);
                                                }}><AttachMoneyIcon />
                                            </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                
                    
                    </div>
                </div>
                <Dialog open={openPagamento} onClose={() => setOpenPagamento(false)}>
          <DialogContent style={styles.customDialogStyle}>
            <h2>Editar Pagamento</h2>
            {pagamento && pagamento
                .filter((pagamento) => pagamento.id === pagamentoIdParaEditar)
                .map((pagamento, index) => (
                  <div key={index} style={styles.uptadePagamento}>
                    <p style={styles.p}>Data: {pagamento.dt_pagamento}</p>
                    <input type="text" placeholder="Data de Pagamento" />
                    <p style={styles.p}>status: {pagamento.statusPagamento}</p>
                    <input type="text" placeholder="Status do Pagamento" />
                    <p style={styles.p}>status: {pagamento.valor_pagamento}</p>
                    <input type="text" placeholder="Valor do Pagamento" />
                    <div style={styles.buttonContainer}>
                      <button style={styles.saveButton}>Salvar</button>
                      <button style={styles.closeButton} onClick={() => { setOpenPagamento(false) }}>Fechar</button>
                    </div>
                  </div>
                ))}
          </DialogContent>
        </Dialog>
        <Dialog open={openAluno} onClose={() => setOpenAluno(false)}>
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
        </Dialog>

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
    buscar:{

        backgroundColor: '#E7E7E7',
        width: '40%',
        minHeight: '6vh',
        marginTop: 20,
        display: 'inline-block',
        justifyContent: 'center',
        flexDirection: "column",
        alignItems: 'right',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 10,
    },
    divIcon: {
        display: 'inline-block',
        float: 'left',
        margin: '2px',
        padding: '5px',
        justifyContent: 'center',
        width: "10%",
        alignItems: 'left'
    },
    listaPagamentos:{
        backgroundColor: '#E7E7E7',
        width: '90%',
        minHeight: '40vh',
        marginTop: 20,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 10,
       
    },
    edicaoPagamento:{
        width: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    },

    infoAlunos: {
        backgroundColor: '#f5f3f3',
        width: '90%',
        minHeight: '55vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 10,
        marginTop: 20,
        overflow: "hidden",
        
      },
      divTile: {
        display: "flex",
        justifyContent: 'space-between',
        marginTop: 20,
    
      },
    divdetalhes: {
        dflexDirection: "row",
        display: "flex",
        justifyContent: 'left',
        marginTop: 20,
        borderBottomColor: "grey",
        borderBottomStyle: 'solid',
        borderWidth: 'thin',
        width: "96%",
       margin: 10,
    },
    divinfoAlunosNomeAluno: {
        display: "inline-block",
        width: '96%',
        flexDirection: "column", 
        alignItems: "center", 
        maxHeight: "300px", 
        overflowY: "auto" 
    },
    divinfoStatus: {
        width: "12%",
        display: "inline-block",
        float: "left",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center", 
        maxHeight: "300px", 
        overflowY: "auto"
    },
    divButtons:{
    marginTop: 20,
    width: "95%",
    display: 'flex',
    justifyContent: 'space-around',
    
    },
    Button:{
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
    link:{
        display: 'inline-block',
        justifyContent: 'right',
        width: "10%",
        alignItems: 'right',
        margin: '5px'

    },
    uptadePagamento: {
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
      customDialogStyle: {
        backgroundColor: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
   
}