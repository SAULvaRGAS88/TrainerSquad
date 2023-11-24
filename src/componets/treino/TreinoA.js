import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import url from '../../service/service';
import { Button, TextField } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TreinoA = () => {

    const location = useLocation();
    const itemId = location.state?.itemId;
    // console.log(itemId)
    const [treino, setTreino] = useState('')
    console.log(treino)
    const [cadastroError, setCadastroError] = useState(false);
    const [exercicio, setExercicio] = useState('')
    const [repeticao, setRepeticao] = useState('')
    const [serie, setSerie] = useState('')
    const [carga, setCarga] = useState('')
    const [obs, setObs] = useState('')
    const [tipo, setTipo] = useState("A")


    const retornaTreinoDb = async () => {
        try {
            const response = await url.get(`/api/pagamento/${itemId}`);
            const status = response.data;
            if (status) {
                const lRetorno = {
                    valor: status.valor,
                    dt_pagamento: status.dt_pagamento,
                    status: status.status,
                    id_aluno: status.id_aluno,
                    id: status.id
                }
                setTreino(lRetorno);
            } else {
                console.log('Nenhum dado encontrado.');
            }
        } catch (error) {
            console.error('Erro ao consultar Status:', error);
        }
    }

    const salvarTreino = async (e) => {
        e.preventDefault();

        try {
            const response = await url.post(`/api/treino/${itemId}`, {
                exercicio: exercicio,
                repeticao: repeticao,
                serie: serie,
                carga: carga,
                obs: obs,
                tipo: tipo,

            });
            if (response.status === 201) {
                console.log('Treino adicionado com sucesso!');
                setCadastroError(false)
                toast.success('Treino Cadastrado');
                alert("Treino Cadastrado")
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setCadastroError(true);
        }
    };

    useEffect(() => {
        retornaTreinoDb();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId]);

    return (
        <div style={styles.espacoTreinos}>
            <h1>Treino A</h1>
            <form style={styles.divCadastro} onSubmit={salvarTreino} >
                <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}></p>
                <div style={{ marginLeft: 10 }}>
                    <div style={{}}>
                        <TextField
                            id="standard-basic"
                            label="Exercício"
                            variant="standard"
                            value={exercicio}
                            onChange={(e) => setExercicio(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 300 }}
                        />
                    </div>
                </div>

                <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}></p>
                <div style={{ marginLeft: 10 }}>
                    <div style={{}}>
                        <TextField
                            id="standard-basic"
                            label="Repetições"
                            variant="standard"
                            value={repeticao}
                            onChange={(e) => setRepeticao(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 100 }}
                        />
                    </div>
                </div>

                <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}></p>
                <div style={{ marginLeft: 10 }}>
                    <div style={{}}>
                        <TextField
                            id="standard-basic"
                            label="serie"
                            variant="standard"
                            value={serie}
                            onChange={(e) => setSerie(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 100 }}
                        />
                    </div>
                </div>

                <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}></p>
                <div style={{ marginLeft: 10 }}>
                    <div style={{}}>
                        <TextField
                            id="standard-basic"
                            label="Carga"
                            variant="standard"
                            value={carga}
                            onChange={(e) => setCarga(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 100 }}
                        />
                    </div>
                </div>

                <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}></p>
                <div style={{ marginLeft: 10 }}>
                    <div style={{}}>
                        <TextField
                            id="standard-basic"
                            label="Observação"
                            variant="standard"
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 300 }}
                        />
                    </div>
                </div>
            </form>
            <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 20, justifyContent: 'center' }}>
                {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
                <Button
                    onClick={salvarTreino}
                    style={styles.Button}
                    variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> SALVAR TREINO</Button>
            </div>
        </div>
    )
}

const styles = {

    espacoTreinos: {
        width: "90%",
        height: 'auto',
        backgroundColor: "#fff",
        marginTop: 0,
        boxShadow: "3px 0px 10px #000",
        display: "flex",
        maxHeight: '50vh',
        overflow: 'auto',
        flexDirection: "column"
    },
    divCadastro:{
        display: "flex"
    }
}