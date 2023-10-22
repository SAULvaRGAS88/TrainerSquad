import React from 'react'
import { HeaderApp } from '../headerApp/HeaderApp';
import { TabelaComInclusao } from './TabelaComInclusao';
import { Button } from '@mui/material';

export const Treino = () => {
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                {/* Detalhamentos e treinos */}
                <div style={styles.titulo}>
                    <h2>Detalhamento de Treinos</h2>
                    <div style={styles.listaTreino}>
                        <Button variant="contained" >Treino A</Button>
                        <Button variant="contained" >Treino B</Button>
                        <Button variant="contained" >Treino C</Button>
                        <Button variant="contained" >Treino D</Button>
                    </div>
                </div>
                {/* Subtítulo Detalhamento do treino do aluno tal */}
                <div style={styles.subTitulo}>
                    <p style={styles.paragrafoSubTitulo}>DETALHAMENTO DO TREINO</p>
                </div>
                <div style={styles.espacoTreinos}>
                    <div style={styles.divTreinos}>
                        <Button variant="contained" style={styles.btnTreino}>Treino A</Button>
                        <Button variant="contained" style={styles.btnTreino}>Treino B</Button>
                        <Button variant="contained" style={styles.btnTreino}>Treino C</Button>
                        <Button variant="contained" style={styles.btnTreino}>Treino D</Button>
                    </div>
                    <TabelaComInclusao />
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
    titulo: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 'medium'
    },
    listaTreino: {
        width: '30%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    subTitulo: {
        width: '95%',
        border: 10,
        border: '#E7E7E7'
    },
    paragrafoSubTitulo: {
        paddingBottom: 5,
        borderBottom: '3px solid #B94E4E',
        fontWeight: 'bold',
        color: '#B94E4E'
    },
    espacoTreinos: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    divTreinos: {
        width: '8%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    btnTreino: {
        marginTop: '20px',
        marginBottom: '20px'
    }
}