import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Login = () => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const efetuarLogin = () => {
        if (usuario === 'teste' && senha === '1234') {
            window.location.href = '/dashBoard';
        } else {
            setLoginError(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Realize aqui a ação de envio do formulário, por exemplo, enviar os dados para o servidor
        // Pode usar usuario e senha para isso
    };

    const FuncaoMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            efetuarLogin();
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
                    <div style={{ marginBottom: 60 }}>
                        <p style={styles.pLogin}>Login</p>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div style={{ paddingLeft: 30, marginBottom: 20 }}>
                            <TextField
                                id="standard-basic"
                                label="Usuário"
                                variant="standard"
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& label': { color: 'white' },
                                    '& fieldset': { borderColor: 'white' },
                                    color: 'white',
                                    '& input': { color: 'white' }

                                }}
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>
                        <div style={{ paddingLeft: 30, marginBottom: 70 }}>
                            <TextField
                                id="standard-basic"
                                label="Senha"
                                variant="standard"
                                InputLabelProps={{
                                    style: { color: 'white' }
                                }}
                                sx={{
                                    '& label': { color: 'white' },
                                    '& fieldset': { borderColor: 'white' },
                                    color: 'white',
                                    '& input': { color: 'white' }
                                }}
                                type={mostrarSenha ? 'text' : 'password'}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={FuncaoMostrarSenha}
                                                edge="end"
                                                color="inherit"
                                            >
                                                {mostrarSenha ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                onKeyDown={handleKeyDown}
                            />
                        </div>


                        <div style={{ alignItems: 'center', display: "flex", flexDirection: "column", width: "100%", }}>
                            <Button
                                onClick={efetuarLogin}
                                sx={{
                                    color: 'black',
                                    backgroundColor: '#798FA7',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#798FA7',
                                    },
                                    width: "40%",
                                    height: 50,
                                    borderRadius: 20,
                                    fontSize: 20,
                                }}
                                variant="contained"
                            >
                                ENTRAR
                            </Button>

                            {loginError && <p style={{ color: 'red', margin: 0 }}>Usuário ou senha incorretos.</p>}
                            <Link style={{ color: 'white', fontSize: 12, paddingTop: 10, textDecoration: 'none' }} to="/">Ainda não tem cadastro? Registre-se</Link>
                            <Link style={{ color: 'white', fontSize: 12, textDecoration: 'none' }} to="/">Esqueceu a senha?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
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
        width: "50%",
        marginTop: 40,
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        flexDirection: "column",
        display: 'flex',
    },
    pLogin: {
        color: 'white',
        fontSize: 40,
        margin: 0,
        paddingLeft: 30,
    }
}
