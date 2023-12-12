import React, { useEffect, useState } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Button, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import url from '../../service/service';
import { useNavigate } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const ListaAvaliacaoFisica = () => {
    const { id } = useParams();

    const [nomeAluno, setNomeAluno] = useState('');
    // const [status, setStatus] = useState('');
    const navigate = useNavigate()

    const location = useLocation();
    const itemId = location.state?.itemId;
    console.log(itemId)

    const avaliacoesAlunos = async () => {
        try {
            const response = await url.get(`/api/avaliacao/${itemId}`);
            const avaliacoes = response.data;

            const lRetorno = [];
            for (let i = 0; i < avaliacoes.length; i++) {
                lRetorno.push({
                    idaluno: avaliacoes[i].idaluno,
                    nome: avaliacoes[i].nome,
                    objetivo: avaliacoes[i].objetivo,
                    data: avaliacoes[i].data,
                    peso: avaliacoes[i].peso,
                    altura: avaliacoes[i].altura,
                    imc: avaliacoes[i].imc,
                    idade: avaliacoes[i].idade,
                    sexo: avaliacoes[i].sexo,
                    circ_punho: avaliacoes[i].circ_punho,
                    circ_abd: avaliacoes[i].circ_abd,
                    circ_gluteo: avaliacoes[i].circ_gluteo,
                    massa_gordura: avaliacoes[i].massa_gordura,
                    porc_gordura: avaliacoes[i].porc_gordura,
                    massa_magra: avaliacoes[i].massa_magra,
                    porc_massa_musc: avaliacoes[i].porc_massa_musc,
                    massa_musc: avaliacoes[i].massa_musc,
                });
            }

            setNomeAluno(lRetorno);
            console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar alunos:', error);
        }
    }
    const enviarAvaliaçãoId = () => {
        navigate(`/avaliacaoFisica/${id}`, {state: {itemId: itemId}})

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
        avaliacoesAlunos();
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

                    {nomeAluno.length > 0 ? (
                        nomeAluno.map((index) => (
                            <Card key={index} style={styles.card}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1"> <span style={{ fontWeight: "bold", fontSize: 18 }}>Nome:</span> {index.nome}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Objetivo: {index.objetivo}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Data: {formatarData(index.data)}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Peso: {index.peso}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Altura: {index.altura}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">IMC: {index.imc}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Idade: {index.idade}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Sexo: {index.sexo}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Circunferência Bíceps: {index.circ_punho}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Circunferência Abdominal: {index.circ_abd}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Circunferência Glúteo: {index.circ_gluteo}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Massa Gordura: {index.massa_gordura}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Porcentagem Gordura (%): {index.porc_gordura}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Massa Magra: {index.massa_magra}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Porcentagem Massa Muscular (%): {index.porc_massa_musc}</Typography>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Typography style={styles.textCard} variant="body1">Massa Muscular: {index.massa_musc}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        ))
                    ) : (
                        <h1 style={{ display: "flex", justifyContent: "center" }}>Aluno não possui Avaliação Física </h1>
                    )}
                </div>

                <div style={styles.divButtons}>
                    <Button
                        onClick={enviarAvaliaçãoId}
                        style={styles.Button}
                        variant="contained"
                    >
                        <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> Cadastrar nova Avaliação
                    </Button>
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
        height: '55vh',
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
    },
    divButtons: {
        marginTop: 20,
        width: "95%",
        display: 'flex',
        justifyContent: 'space-around'
    },
    Button: {
        width: '30%',
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
}