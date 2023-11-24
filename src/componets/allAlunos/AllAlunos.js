import React, { useEffect, useState } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
// import SearchIcon from '@mui/icons-material/Search';
import { Button, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import url from '../../service/service';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const AllAlunos = () => {

    const [nomeAluno, setNomeAluno] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate()

    const { id } = useParams();

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
                    sexo: alunos[i].sexo,
                    cpf: alunos[i].cpf,
                    dt_nascimento: alunos[i].dt_nascimento,
                    email: alunos[i].email,
                    status: alunos[i].status,
                    plano: alunos[i].plano,
                });
            }

            setNomeAluno(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar alunos:', error);
        }
    }

    const retornaStatusPag = async () => {
        try {
            const response = await url.get(`/api/aluno/${id}/pag`);
            const status = response.data;

            const lRetorno = [];
            for (let i = 0; i < status.length; i++) {
                lRetorno.push({
                    id: status[i].id_aluno,
                    valor: status[i].valor,
                    dt_pagamento: status[i].dt_pagamento,
                });
            }

            setStatus(lRetorno);
            console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar Status:', error);
        }
    }

    const formatarData = (dataString) => {
        if (!dataString) {
            return "";
        }

        const ano = dataString.slice(0, 4);
        const mes = dataString.slice(5, 7);
        const dia = dataString.slice(8, 10);
        return `${dia}-${mes}-${ano}`;
    };

    useEffect(() => {
        retornaAlunosDb();
        retornaStatusPag();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />

                {/* <div style={styles.containerBusca}>
                    <div style={styles.divIconProcura}>
                        <SearchIcon />
                    </div>
                    <TextField />
                </div> */}

                <div style={styles.container}>
                    
                    {nomeAluno && status && nomeAluno.map((item, index) => {
                        const alunoId = item.id;
                        const statusItem = status.concat(statusItem => statusItem.id_aluno === alunoId) 
                        if (statusItem) { 
                            return  (
                                <Card key={index} style={styles.card}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1"> <span style={{fontWeight:"bold", fontSize: 18}}>Nome:</span> {item.nome}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">CPF: {item.cpf}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Telefone: {item.telefone}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Data Nasc: {formatarData(item.dt_nascimento)}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">E-Mail: {item.email}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Sexo: {item.sexo}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Plano: {item.plano}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Valor: {statusItem[index].valor}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Data Pagamento: {formatarData(statusItem[index].dt_pagamento)}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Status: {item.status}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Avaliação Física <Button onClick={() => {
                                                navigate(`/ListaAvaliacaoFisica/${id}`, { state: { itemId: item.id } })
                                            }} variant="text">fazer Avaliação</Button> </Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3}>
                                            <Typography style={styles.textCard} variant="body1">Editar Aluno <Button
                                                variant="text"
                                                onClick={() => {
                                                    navigate(`/editarAluno/${id}`, { state: { itemId: item.id } })
                                                }}
                                            >Editar</Button> </Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            );
                        }

                        return null;
                    })}
                </div>
            </div>
        </div>
    );
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
    container: {
        backgroundColor: 'rgb(255, 255, 255)',
        width: '80vw',
        height: '65vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        overflowY: 'auto',
        marginTop: 20
    },
    containerBusca: {
        backgroundColor: 'rgb(255, 255, 255)',
        width: '40vw',
        height: '5vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 20,
        display: "flex",
        alignItems: 'center',
        marginTop: 10,
        margin: 20,
        padding: 10,
    },
    divIconProcura: {
        display: "flex"
    },
    divtTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 10
    },
    card: {
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        margin: 10
    },
    textCard: {
        color: "black",
        fontFamily: "serif",
        fontSize: 16,
    }
}