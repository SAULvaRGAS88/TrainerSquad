import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import url from '../../service/service';
import { Button, TextField } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import DeleteIcon from '@mui/icons-material/Delete';

export const TreinoC = () => {

    const location = useLocation();
    const itemId = location.state?.itemId;
    const [cadastroError, setCadastroError] = useState(false);
    const [treinos, setTreinos] = useState([
        { exercicio: '', repeticao: '', serie: '', carga: '', obs: '', tipo: 'C' },
    ]);

    const handleChange = (index, campo, valor) => {
        const novosTreinos = [...treinos];
        novosTreinos[index][campo] = valor;
        setTreinos(novosTreinos);
    };

    const adicionarLinha = () => {
        setTreinos([
            ...treinos,
            { exercicio: '', repeticao: '', serie: '', carga: '', obs: '', tipo: 'C' },
        ]);
    };
    const removerLinha = (indexToRemove) => {
        setTreinos((prevTreinos) => {
            return prevTreinos.filter((treino, index) => index !== indexToRemove);
        });
    }

    const renderizarCampos = () => {
        return treinos.map((treino, index) => (
            <div key={index} style={{ display: "flex" }}>
                <TextField
                    variant="standard"
                    label={`Exercício ${index + 1}`}
                    value={treino.exercicio}
                    onChange={(e) => handleChange(index, 'exercicio', e.target.value)}
                    sx={{ mr: 5, width: 200 }}
                />
                <TextField
                    variant="standard"
                    label={`Repetição ${index + 1}`}
                    value={treino.repeticao}
                    onChange={(e) => handleChange(index, 'repeticao', e.target.value)}
                    sx={{ mr: 5, width: 100 }}
                />
                <TextField
                    variant="standard"
                    label={`Série ${index + 1}`}
                    value={treino.serie}
                    onChange={(e) => handleChange(index, 'serie', e.target.value)}
                    sx={{ mr: 5, width: 100 }}
                />
                <TextField
                    variant="standard"
                    label={`Carga ${index + 1}`}
                    value={treino.carga}
                    onChange={(e) => handleChange(index, 'carga', e.target.value)}
                    sx={{ mr: 5, width: 100 }}
                />
                <TextField
                    variant="standard"
                    label={`Observação ${index + 1}`}
                    value={treino.obs}
                    onChange={(e) => handleChange(index, 'obs', e.target.value)}
                    sx={{ width: 200 }}
                />
                <Button sx={{ color: '#d32f2f', alignItems:"flex-end" }} onClick={adicionarLinha}><PlusOneIcon /></Button>
                <Button sx={{ color: '#d32f2f', alignItems:"flex-end" }} onClick={() => removerLinha(0)}><DeleteIcon /></Button>
            </div>
        ));
    };

    const salvarTreino = async (e) => {
        e.preventDefault();
        try {
            setCadastroError(false);

            for (const treinoItem of treinos) {
                console.log('Dados enviados:', treinoItem);
                const response = await url.post(`/api/treino/${itemId}`, treinoItem);

                if (response.status !== 201) {
                    console.error('Erro ao cadastrar treino:', response);
                    setCadastroError(true);
                    return;
                }
            }

            console.log('Treinos adicionados com sucesso!');
            toast.success('Treinos Cadastrados', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            toast.error('Ocorreu um erro ao cadastrar. Verifique os dados.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setCadastroError(true);
        }
    };

    return (
        <div style={styles.espacoTreinos}>
            <form style={styles.form}>
                {renderizarCampos()}
            </form>

            <div style={{ display: "flex", marginBottom: 10, marginTop: 20, justifyContent: 'center' }}>
                <Button
                    onClick={salvarTreino}
                    style={styles.Button}
                    variant="contained"> <FitnessCenterIcon style={{ fontSize: 40, color: '#d32f2f' }} /> SALVAR TREINO</Button>
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
    espacoTreinos: {
        width: "90%",
        height: 'auto',
        backgroundColor: "#fff",
        marginTop: 0,
        boxShadow: "3px 0px 10px #000",
        display: "flex",
        maxHeight: '50vh',
        overflow: 'auto',
        flexDirection: "column",
        alignItems: 'center',
    },
    divCadastro: {
        display: "flex"
    },
    form: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        marginTop: 15
    },
    divBot: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '80%',
        flexDirection: 'row'
    }
}