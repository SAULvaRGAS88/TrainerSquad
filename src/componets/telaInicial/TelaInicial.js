import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const TelaInicial = () => {
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <div style={styles.header}>
                    <p style={styles.titleHeader}>
                        Trainer Squad
                    </p>
                </div>
                <div style={styles.box}>
                    <div style={{ width: "100%", alignItems: 'center', display: "flex", flexDirection: "column", }}>
                        <Button
                            component={Link}
                            to="/login"
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
                    </div>
                    <div style={{ width: "100%", alignItems: 'center', display: "flex", flexDirection: "column", }}>
                        <Button
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
                            variant="contained">CADASTRAR</Button>
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
        justifyContent: "space-evenly",
        alignItems: 'center',
        display: 'flex',
    }
}
