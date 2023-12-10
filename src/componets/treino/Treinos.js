import React, { useEffect, useState } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { Card, Button, Grid, Typography, Tooltip } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router'
import url from '../../service/service'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const Treinos = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const location = useLocation();
    const itemId = location.state?.itemId;
    const [treinoA, setTreinoA] = useState([]);
    const [treinoB, setTreinoB] = useState([]);
    const [treinoC, setTreinoC] = useState([]);
    const [treinoD, setTreinoD] = useState([]);
    const [nomeAluno, setNomeAluno] = useState([]);

    const retornaNomeAluno = async () => {
        try {
            const response = await url.get(`/api/aluno/${itemId}`);
            const aluno = response.data;

            const lRetorno = [];
            const nome = aluno.nome;
            lRetorno.push({
                nome: nome
            });

            setNomeAluno(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar Dados Aluno:', error);
        }
    }

    const retornaTreinosADb = async () => {
        try {

            const response = await url.get(`/api/treino/${itemId}/A`);
            const retornaTreino = response.data;

            const lRetorno = retornaTreino.map(item => ({
                obs: item.obs,
                id: item.id,
                carga: item.carga,
                exercicio: item.exercicio,
                tipo: item.tipo,
                serie: item.serie,
                repeticao: item.repeticao,
                idaluno: item.idaluno,
            }));

            setTreinoA(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar Treinos A:', error);
        }
    };


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
            console.error('Erro ao consultar Treinos B:', error);
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
            console.error('Erro ao consultar Treinos C:', error);
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
            console.error('Erro ao consultar Treinos D:', error);
        }
    }

    const deletarTreinoA = async () => {
        try {
            const response = await url.delete(`/api/treino/${itemId}/A`)
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

            if (response.data) {
                toast.success('Treinos Excluidos', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Erro ao Deletar Treinos A:', error);
            toast.error('Sem Treinos para excluir!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const deletarTreinoB = async () => {
        try {
            const response = await url.delete(`/api/treino/${itemId}/B`)
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

            if (response.data) {
                toast.success('Treinos Excluidos', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Erro ao Deletar Treinos B:', error);
            toast.error('Sem Treinos para excluir!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const deletarTreinoC = async () => {
        try {
            const response = await url.delete(`/api/treino/${itemId}/C`)
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

            if (response.data) {
                toast.success('Treinos Excluidos', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Erro ao Deletar Treinos C:', error);
            toast.error('Sem Treinos para excluir!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const deletarTreinoD = async () => {
        try {
            const response = await url.delete(`/api/treino/${itemId}/D`)
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

            if (response.data) {
                toast.success('Treinos Excluidos', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Erro ao Deletar Treinos D:', error);
            toast.error('Sem Treinos para excluir!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
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

    const gerarPDF = (dados, treino) => {
        const body = dados.map((item) => {
            return [
                { text: item.exercicio, fontSize: 16 },
                { text: item.repeticao, fontSize: 16, alignment: 'center' },
                { text: item.serie, fontSize: 16, alignment: 'center' },
                { text: item.carga, fontSize: 16, alignment: 'center' },
                { text: item.obs, fontSize: 16, alignment: 'center' },
            ];
        });

        const documentDefinition = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            content: [
                {
                    text: `Treino ${treino}`,
                    fontSize: 40,
                    bold: true,
                    alignment: 'center',
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', '*', '*', '*', '*'],
                        body: [
                            ['Exercício', 'Repetição', 'Série', 'Carga', 'Observação'],
                            ...body,
                        ],
                    },
                },
            ],
        };

        pdfMake.createPdf(documentDefinition).download(`treino${treino}.pdf`);
    };


    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <div style={styles.divName}>
                    <div style={{ marginTop: 5, fontSize: 14, fontWeight: "bold" }}>
                        Aluno(ª) :
                        {nomeAluno &&
                            nomeAluno.map((item, index) => (
                                <p key={index} style={{ display: 'inline-block', margin: 0, marginLeft: 5 }}>
                                    {item.nome}
                                </p>
                            ))}</div>
                </div>

                <div style={styles.container}>
                    <div style={styles.divDou}>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <p style={{ margin: 5, color: '#d32f2f', fontSize: 18, fontWeight: "bold" }}>Treino A</p>

                                <div>
                                    <Tooltip title="Gerar PDF" arrow>
                                        <PictureAsPdfIcon
                                            onClick={() => gerarPDF(treinoA, "A")}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Gerar PDF")}
                                        />
                                    </Tooltip>

                                    <Tooltip title="Excluir Treino" arrow>
                                        <DeleteIcon
                                            onClick={deletarTreinoA}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Excluir Treino?")}
                                        />
                                    </Tooltip>
                                </div>
                            </div>

                            <div style={styles.titleBox}>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start", color: '#d32f2f' }}>Exercício</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</p>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</p>
                            </div>
                            {treinoA && treinoA.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                    }} container spacing={0}>
                                        <Grid item style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <p style={styles.pTreino}>{item.exercicio}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.repeticao}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.serie}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.carga}</p>
                                        </Grid>
                                        <Grid style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.obs}</p>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <p style={{ margin: 5, color: '#d32f2f', fontSize: 18, fontWeight: "bold" }}>Treino B</p>

                                <div>
                                    <Tooltip title="Gerar PDF" arrow>
                                        <PictureAsPdfIcon
                                            onClick={() => gerarPDF(treinoB, "B")}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Gerar PDF")}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Excluir Treino" arrow>
                                        <DeleteIcon
                                            onClick={deletarTreinoB}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Excluir Treino?")}
                                        />
                                    </Tooltip>
                                </div>

                            </div>
                            <div style={styles.titleBox}>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start", color: '#d32f2f' }}>Exercício</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</p>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</p>
                            </div>
                            {treinoB && treinoB.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <p style={styles.pTreino}>{item.exercicio}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.repeticao}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.serie}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.carga}</p>
                                        </Grid>
                                        <Grid style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.obs}</p>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                    </div>
                    <div style={styles.divDou}>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <p style={{ margin: 5, color: '#d32f2f', fontSize: 18, fontWeight: "bold" }}>Treino C</p>

                                <div>
                                    <Tooltip title="Gerar PDF" arrow>
                                        <PictureAsPdfIcon
                                            onClick={() => gerarPDF(treinoC, "C")}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Gerar PDF")}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Excluir Treino" arrow>
                                        <DeleteIcon
                                            onClick={deletarTreinoC}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Excluir Treino?")}
                                        />
                                    </Tooltip>
                                </div>

                            </div>
                            <div style={styles.titleBox}>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start", color: '#d32f2f' }}>Exercício</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</p>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</p>
                            </div>
                            {treinoC && treinoC.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <p style={styles.pTreino}>{item.exercicio}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.repeticao}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.serie}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.carga}</p>
                                        </Grid>
                                        <Grid style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.obs}</p>
                                        </Grid>
                                    </Grid>
                                </Card>
                            ))}
                        </Card>
                        <Card style={styles.card} >
                            <div style={styles.divTitle}>
                                <p style={{ margin: 5, color: '#d32f2f', fontSize: 18, fontWeight: "bold" }}>Treino D</p>

                                <div>
                                    <Tooltip title="Gerar PDF" arrow>
                                        <PictureAsPdfIcon
                                            onClick={() => gerarPDF(treinoD, "D")}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Gerar PDF")}
                                        />
                                    </Tooltip>

                                    <Tooltip title="Excluir Treino" arrow>
                                        <DeleteIcon
                                            onClick={deletarTreinoD}
                                            htmlColor='#d32f2f'
                                            style={styles.iconDel}
                                            onMouseOver={() => ("Excluir Treino?")}
                                        />
                                    </Tooltip>
                                </div>

                            </div>
                            <div style={styles.titleBox}>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start", color: '#d32f2f' }}>Exercício</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Repetição</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Série</p>
                                <p style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Carga</p>
                                <p style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center", color: '#d32f2f' }}>Observação</p>
                            </div>
                            {treinoD && treinoD.map((item, index) => (
                                <Card key={index} style={styles.divTreinos}>
                                    <Grid sx={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        padding: 0,
                                        // width: '20%'
                                    }} container spacing={0}>
                                        <Grid item style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <p style={styles.pTreino}>{item.exercicio}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.repeticao}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.serie}</p>
                                        </Grid>
                                        <Grid style={{ width: '10%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.carga}</p>
                                        </Grid>
                                        <Grid style={{ width: '35%', padding: 5, margin: 0, display: "flex", justifyContent: "center" }}>
                                            <p style={styles.pTreino}>{item.obs}</p>
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
        height: '65vh',
        margin: 10,
        justifyContent: 'space-between',
        overflowY: 'auto',
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
    pTreino: {
        margin: 0,
        // padding: 5,
    }

}