import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import url from '../../service/service';
import { useNavigate } from 'react-router-dom';


export const CadastroPersonal = () => {
    const [cadastroError, setCadastroError] = useState(false);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await url.post('/api/personal', {
                nome: nome,
                senha: senha,
                email: email,
            });

            if (response.status === 201) {
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setCadastroError(true);
        }
    };

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <div style={styles.header}>
                    <p style={styles.titleHeader}>
                        Trainer Squad
                    </p>
                </div>
                <div style={styles.box}>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="Nome"
                                variant="outlined"
                                onChange={(e) => setNome(e.target.value)}
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& fieldset': { borderColor: 'white', },
                                    '& input': { color: 'white' },
                                    width: 300,
                                    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)'
                                }}
                            />
                        </div>

                        <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="E-mail"
                                variant="outlined"
                                onChange={(e) => setEmail(e.target.value)}
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& fieldset': { borderColor: 'white', },
                                    '& input': { color: 'white' },
                                    width: 300,
                                    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)'
                                }}
                            />
                        </div>

                        {/* <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="Confirme E-mail"
                                variant="outlined"
                                onChange={(e) => setSenha(e.target.value)}
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& fieldset': { borderColor: 'white', },
                                    '& input': { color: 'white' },
                                    width: 300,
                                    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)'
                                }}
                            />
                        </div> */}

                        <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="Senha"
                                variant="outlined"
                                onChange={(e) => setSenha(e.target.value)}
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& fieldset': { borderColor: 'white', },
                                    '& input': { color: 'white' },
                                    width: 300,
                                    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)'
                                }}
                            // onKeyDown={handleKeyDown}
                            />
                        </div>

                        {/* <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="Confirme Senha"
                                variant="outlined"
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& fieldset': { borderColor: 'white', },
                                    '& input': { color: 'white' },
                                    width: 300,
                                    boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)'
                                }}
                                onKeyDown={handleKeyDown}
                            />
                        </div> */}

                        {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            <Button
                                style={styles.Button}
                                variant="contained"
                                onClick={handleSubmit}
                            >Criar</Button>
                            {/* <Button
                                style={{
                                    ...styles.ButtonLogo,
                                    backgroundImage: 'url("/logoGoogle.png")',
                                    backgroundSize: '150px  50px',
                                    backgroundRepeat: 'no-repeat',
                                    opacity: 0.6
                                }}
                                variant="contained"
                                onClick={() => { }}>
                                entrar
                            </Button> */}
                        </div>
                    </form>
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
    header: {
        backgroundColor: '#1F2B45',
        width: '95%',
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',

    },
    titleHeader: {
        color: 'white',
        fontSize: 40,
        fontFamily: "serif"
    },
    box: {
        backgroundColor: '#1F2B45',
        minHeight: '60vh',
        width: "60%",
        marginTop: 40,
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: 'center',
        display: 'flex',
    },
    imput: {
        marginBottom: 10,
        width: '100%'
    },
    Button: {
        width: '45%',
        height: 50,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        backgroundColor: '#798FA7',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        borderRadius: 5
    },
    logo: {
        width: 45,
        height: 40
    },
    ButtonLogo: {
        width: '45%',
        height: 50,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        backgroundColor: '#798FA7',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        borderRadius: 5,
    }
}
