import { useState, useEffect } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import firebase from 'firebase/app';
import 'firebase/auth';

export const HeaderApp = () => {

    const [userDisplayName, setUserDisplayName] = useState(null);
    const [userphotoURL, setuserphotoURL] = useState(null);

    const handleLogout = () => {
        const auth = firebase.auth();
        auth.signOut()
            .then(() => {
                console.log('Logout bem-sucedido');
                window.location.href = '/';
            })
            .catch((error) => {
                console.error('Erro ao fazer logout', error);
            });
    };

    useEffect(() => {
        const auth = firebase.auth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user) 
                const { displayName, photoURL } = user;
                if (displayName || photoURL) {
                    setUserDisplayName(displayName);
                    setuserphotoURL(photoURL);
                }
            } else {
                setUserDisplayName(null);
                setuserphotoURL(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

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
                    {userphotoURL && <img src={userphotoURL} alt="Foto do usuário" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 20 }} />}
                    {userDisplayName ? <p>{userDisplayName}</p> : <p></p>}
                    <LogoutIcon onClick={handleLogout} style={{ cursor: "pointer", marginLeft: 20, fontSize: 34 }} />
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
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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