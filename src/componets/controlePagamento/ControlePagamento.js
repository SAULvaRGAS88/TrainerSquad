import React,{useState, useEffect} from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import url from '../../service/service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const ControlePagamento = () => {
const { id } = useParams();

const [nomeAluno, setNomeAluno] = useState([]);
const [status, setStatus] = useState([]);
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

const retornaStatusPag = async () => {
    try {
        const response = await url.get(`/api/pagamento/pagamentos`);
        const status = response.data;

        const lRetorno = [];
        for (let i = 0; i < status.length; i++) {
            lRetorno.push({
            status: status[i].status
            });
        }

        setStatus(lRetorno);
        console.log(lRetorno);
        } catch (error) {
        console.error('Erro ao consultar Status:', error);
        }
    }

useEffect(() => {
    retornaAlunosDb();
    retornaStatusPag();
}, []);

const [alunoIdParaEditar, setAlunoIdParaEditar] = useState(null);
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <div style={styles.buscar}>
                        <Link to={`/alunos/${id}`} style={{ textDecoration: 'none', color: 'black' }}>Buscar Alunos 
                        </Link>
                    <div style ={styles.divIcon}>
                        <SearchIcon style={{ fontSize: 20, color: 'green' }} />
                    </div>
                </div>
                
                <div style={styles.listaPagamentos}>
                    <div style={styles.divdetalhes}>

                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p style={{}}>Nome Do Aluno</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p>Plano</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p >Valor</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p >Data Pagamento</p></div>
                        <div style={{ width: "32%", display: "flex", justifyContent: "center" }}><p >Status</p></div>

                    </div>
                    
                </div>
                    <div style={styles.divButtons}>
                        <Button
                            // component={Link}
                            // to={`/cadastroPagamento/${id}`}
                            style={styles.Button}
                            variant="contained"> <AttachMoneyIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR Pagamento</Button>
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

   
}