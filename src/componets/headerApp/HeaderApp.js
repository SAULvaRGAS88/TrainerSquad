import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';

export const HeaderApp = () => {
    return (
        <div style={styles.header}>
            <div style={styles.Icon}>
                <FitnessCenterIcon sx={{ color: 'white', fontSize: 60 }} />
            </div>

            <div style={styles.divBox}>
                <div style={styles.divLinks}>
                    <Link to={"/dashboard"} style={{ textDecoration: 'none', color: "white" }}>HOME</Link>
                    <Link to={"/cadastroAluno"} style={{ textDecoration: 'none', color: "white" }}>ALUNOS</Link>
                    <Link to={"/controlePagamento"} style={{ textDecoration: 'none', color: "white" }}>PAGAMENTOS</Link>
                    <Link to={"/treino"} style={{ textDecoration: 'none', color: "white" }}>TREINOS</Link>
                </div>

                <div style={styles.divP}>
                    <p>Fuluno Treinador</p>
                </div>

            </div>
        </div>
    )
}

const styles = {
    header: {
        backgroundColor: '#1F2B45',
        width: '95%',
        height: 100,
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    },
    Icon: {
        float: 'left',
        marginLeft: 20
    },
    divBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginLeft: 20
    },
    divP: {
        marginRight: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    divLinks: {
        display: "flex",
        justifyContent: "space-between",
        width: 450,
        textTraformation: "none",
        fontSize: 20,
        fontWeight: 'bold'
    }
}