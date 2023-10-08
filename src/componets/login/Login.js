import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
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

                            }} />
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

                            }} />
                    </div>

                    <div style={{ alignItems: 'center', display: "flex", flexDirection: "column", }}>
                        <Button
                            component={Link}
                            to="/dashBoard"
                            sx={{
                                color: 'black',
                                backgroundColor: '#798FA7',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#798FA7',
                                },
                                width: 300,
                                height: 50,
                                borderRadius: 20,
                                fontSize: 20,
                            }}
                            variant="contained"
                        >
                            ENTRAR
                        </Button>
                        <Link style={{ color: 'white', fontSize:12, paddingTop: 10, textDecoration: 'none' }} to="/">Ainda não tem cadastro? Registre-se</Link>
                        <Link style={{ color: 'white',fontSize:12, textDecoration: 'none'}} to="/">Esqueceu a senha?</Link>
                    </div>
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
        // justifyContent: "space-evenly",
        // alignItems: 'center',
        display: 'flex',
    },
    pLogin: {
        color: 'white',
        fontSize: 40,
        margin: 0,
        paddingLeft: 30,
    }
}
