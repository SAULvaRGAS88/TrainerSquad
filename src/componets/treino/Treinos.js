import React, { useEffect, useState } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Card, Button, Grid, Typography, Tooltip } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router'
import url from '../../service/service'
import DeleteIcon from '@mui/icons-material/Delete';

export const Treinos = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const location = useLocation();
    const itemId = location.state?.itemId;
    // console.log(itemId, "Treinossss")
    const [treinoA, setTreinoA] = useState([]);
    const [treinoB, setTreinoB] = useState([]);
    const [treinoC, setTreinoC] = useState([]);
    const [treinoD, setTreinoD] = useState([]);
    const [nomeAluno, setNomeAluno] = useState([]);

    const retornaNomeAluno = async () => {
        try {
            const response = await url.get(`/api/aluno/${itemId}`);
            const person = response.data;

            const lRetorno = [];
            const nome = person.nome;
            lRetorno.push({
                nome: nome
            });

            setNomeAluno(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar DadosPersonal:', error);
        }
    }

    const retornaTreinosADb = async () => {
        try {
            const response = await url.get(`/api/treino/${itemId}/A`)
            const retornaTreino = response.data;
            const lRetorno = [];
            for (let i = 0; i < retornaTreino.length; i++) {
                lRetorno.push({
                    obs: retornaTreino[i].obs,
                    id: retornaTreino[i].id,
                    carga: retornaTreino[i].carga,
                    exercicio: retornaTreino[i].exercicio,
                    tipo: retornaTreino[i].tipo,
                    serie: retornaTreino[i].serie,
                    repeticao: retornaTreino[i].repeticao,
                    idaluno: retornaTreino[i].idaluno,
                });
            }
            setTreinoA(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar TreinosA:', error);
        }
    }

    const retornaTreinosBDb = async () => {
        try {
            const response = await url.get(`/api/treino/${itemId}/B`)
            const retornaTreino = response.data;
            const lRetorno = [];
            for (let i = 0; i < retornaTreino.length; i++) {
                lRetorno.push({
                    obs: retornaTreino[i].obs,
                    id: retornaTreino[i].id,
                    carga: retornaTreino[i].carga,
                    exercicio: retornaTreino[i].exercicio,
                    tipo: retornaTreino[i].tipo,
                    serie: retornaTreino[i].serie,
                    repeticao: retornaTreino[i].repeticao,
                    idaluno: retornaTreino[i].idaluno,
                });
            }
            setTreinoB(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar TreinosB:', error);
        }
    }

    const retornaTreinosCDb = async () => {
        try {
            const response = await url.get(`/api/treino/${itemId}/C`)
            const retornaTreino = response.data;
            const lRetorno = [];
            for (let i = 0; i < retornaTreino.length; i++) {
                lRetorno.push({
                    obs: retornaTreino[i].obs,
                    id: retornaTreino[i].id,
                    carga: retornaTreino[i].carga,
                    exercicio: retornaTreino[i].exercicio,
                    tipo: retornaTreino[i].tipo,
                    serie: retornaTreino[i].serie,
                    repeticao: retornaTreino[i].repeticao,
                    idaluno: retornaTreino[i].idaluno,
                });
            }
            setTreinoC(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar TreinosB:', error);
        }
    }
    const retornaTreinosDDb = async () => {
        try {
            const response = await url.get(`/api/treino/${itemId}/D`)
            const retornaTreino = response.data;
            const lRetorno = [];
            for (let i = 0; i < retornaTreino.length; i++) {
                lRetorno.push({
                    obs: retornaTreino[i].obs,
                    id: retornaTreino[i].id,
                    carga: retornaTreino[i].carga,
                    exercicio: retornaTreino[i].exercicio,
                    tipo: retornaTreino[i].tipo,
                    serie: retornaTreino[i].serie,
                    repeticao: retornaTreino[i].repeticao,
                    idaluno: retornaTreino[i].idaluno,
                });
            }
            setTreinoD(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar TreinosB:', error);
        }
    }

    const deletarTreinoA = async () => {
        try {
            const response = await url.get(`/api/treino/${itemId}/D`)
            const retornaTreino = response.data;
            const lRetorno = [];
            for (let i = 0; i < retornaTreino.length; i++) {
                lRetorno.push({
                    obs: retornaTreino[i].obs,
                    id: retornaTreino[i].id,
                    carga: retornaTreino[i].carga,
                    exercicio: retornaTreino[i].exercicio,
                    tipo: retornaTreino[i].tipo,
                    serie: retornaTreino[i].serie,
                    repeticao: retornaTreino[i].repeticao,
                    idaluno: retornaTreino[i].idaluno,
                });
            }
            setTreinoD(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar TreinosB:', error);
        }
    }

    useEffect(() => {
        retornaTreinosADb();
        retornaTreinosBDb();
        retornaTreinosCDb();
        retornaTreinosDDb();
        retornaNomeAluno();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <div style={styles.divName}>
                    <p style={{ marginTop: 5, fontSize: 14, fontWeight: "bold" }}>
                        Aluno(ª) :
                        {nomeAluno &&
                            nomeAluno.map((item, index) => (
                                <p key={index} style={{ display: 'inline-block', margin: 0, marginLeft: 5 }}>
                                    {item.nome}
                                </p>
                            ))}</p>
                </div>

                <div style={styles.container}>
                    <div style={styles.divDou}>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <h3 style={{ margin: 5, color: '#d32f2f' }}>Treino A</h3>
                                <Tooltip title="Excluir Treino" arrow>
                                    <DeleteIcon
                                        onClick={deletarTreinoA}
                                        htmlColor='#d32f2f'
                                        style={styles.iconDel}
                                        onMouseOver={() => ("Excluir Treino?")}
                                    />
                                </Tooltip>
                            </div>

                            <div style={styles.titleBox}>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Exercício</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</Typography>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</Typography>
                            </div>
                            {treinoA && treinoA.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                    }} container spacing={0}>
                                        <Grid item sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.exercicio}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.repeticao}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.serie}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.carga}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.obs}</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <h3 style={{ margin: 5, color: '#d32f2f' }}>Treino B</h3>
                                <Tooltip title="Excluir Treino" arrow>
                                    <DeleteIcon
                                        onClick={deletarTreinoA}
                                        htmlColor='#d32f2f'
                                        style={styles.iconDel}
                                        onMouseOver={() => ("Excluir Treino?")}
                                    />
                                </Tooltip>
                            </div>
                            <div style={styles.titleBox}>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Exercício</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</Typography>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</Typography>
                            </div>
                            {treinoB && treinoB.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.exercicio}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.repeticao}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.serie}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.carga}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.obs}</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                    </div>
                    <div style={styles.divDou}>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <h3 style={{ margin: 5, color: '#d32f2f' }}>Treino C</h3>
                                <Tooltip title="Excluir Treino" arrow>
                                    <DeleteIcon
                                        onClick={deletarTreinoA}
                                        htmlColor='#d32f2f'
                                        style={styles.iconDel}
                                        onMouseOver={() => ("Excluir Treino?")}
                                    />
                                </Tooltip>
                            </div>
                            <div style={styles.titleBox}>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Exercício</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</Typography>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</Typography>
                            </div>
                            {treinoC && treinoC.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.exercicio}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.repeticao}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.serie}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.carga}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.obs}</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <h3 style={{ margin: 5, color: '#d32f2f' }}>Treino D</h3>
                                <Tooltip title="Excluir Treino" arrow>
                                    <DeleteIcon
                                        onClick={deletarTreinoA}
                                        htmlColor='#d32f2f'
                                        style={styles.iconDel}
                                        onMouseOver={() => ("Excluir Treino?")}
                                    />
                                </Tooltip>
                            </div>
                            <div style={styles.titleBox}>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Exercício</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</Typography>
                                <Typography sx={{ width: '10%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</Typography>
                                <Typography sx={{ width: '35%', p: 0.5, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</Typography>
                            </div>
                            {treinoD && treinoD.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.exercicio}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.repeticao}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.serie}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '10%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.carga}</Typography>
                                        </Grid>
                                        <Grid sx={{ width: '35%', p: 0, display: "flex", justifyContent: "center" }}>
                                            <Typography>{item.obs}</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                    </div>
                </div>

                <Button
                    style={styles.Button}
                    variant="contained"
                    onClick={() => navigate(`/treino/${id}`, { state: { itemId } })}>
                    Cadastrar Treino
                </Button>
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
    divTreinos: {
        display: 'flex',
        borderRadius: 0,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        height: 'auto',
        margin: 20,
        justifyContent: 'space-between',
    },
    card: {
        margin: 10,
        width: '50%',
        height: "auto"
    },
    titleBox: {
        display: "flex",
        flexDirection: 'row',
        padding: 0,
        width: '100%'

    },
    divDou: {
        display: 'flex'
    },
    divTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    iconDel: {
        cursor: 'pointer'
    },
    Button: {
        height: 50,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        backgroundColor: '#f5f3f3',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        borderRadius: 50,
        marginTop: 0
    },
    divName: {
        width: '93%',
        height: 10,
        display: 'flex',
        justifyContent: 'flex-start',
    },

}