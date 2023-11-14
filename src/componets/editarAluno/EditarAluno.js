import React from 'react'
import { HeaderApp } from '../headerApp/HeaderApp'
import { useLocation } from 'react-router-dom';

export const EditarAluno = () => {

    const location = useLocation();
    const itemId = location.state?.itemId;
    console.log(itemId)

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <h1>Aqui será editado o aluno com ID que jão esta vindo: {itemId}</h1>
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
    }
}