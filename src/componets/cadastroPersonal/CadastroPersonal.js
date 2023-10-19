import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { firebase, auth } from '../../service/firebase'
import { useAuth } from '../../hooks/useAuth';

export const CadastroPersonal = () => {
    const { user, setUser } = useAuth()
    const [cadastroError, setcadastroError] = useState(false);
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    console.log(user)
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid, displayName, photoURL } = user
                if (!displayName || !photoURL)
                    throw new Error("O usuário não possui Nome ou Foto")
                setUser({
                    id: uid,
                    avatar: photoURL,
                    name: displayName
                })
            }
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        // Realize aqui a ação de envio do formulário, por exemplo, enviar os dados para o servidor
        // Pode usar usuario e senha para isso
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            CriarCadastro();
        }
    };

    const CriarCadastro = () => {
        if (nome === '' && senha === '' && email === '') {
            window.location.href = '/dashBoard';
        } else {
            setcadastroError(true);
        }
    };


    const loginGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        if (result.user) {
            const { uid, displayName, photoURL } = result.user
            if (!displayName || !photoURL)
                throw new Error("O usuário não possui Nome ou Foto")
            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName
            })
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

                        <div style={styles.imput}>
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
                        </div>

                        <div style={styles.imput}>
                            <TextField
                                id="standard-basic"
                                label="Senha"
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
                            />
                        </div>

                        <div style={styles.imput}>
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
                        </div>
                        {cadastroError && <p style={{ color: 'red', margin: 0 }}>Favor revivar os dados informados.</p>}
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <Button
                                style={styles.Button}
                                variant="contained"
                                onClick={CriarCadastro}
                            >Criar</Button>
                            <Button
                                style={{
                                    ...styles.ButtonLogo,
                                    backgroundImage: 'url("/logoGoogle.png")',
                                    backgroundSize: '150px  50px',
                                    backgroundRepeat: 'no-repeat',
                                    opacity: 0.6
                                }}
                                variant="contained"
                                onClick={loginGoogle}>

                                entrar

                            </Button>
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
