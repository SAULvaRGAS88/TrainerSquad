import { useState, useEffect } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useParams } from 'react-router-dom';
import url from '../../service/service';

export const HeaderApp = () => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();

    const logout = () => {
        window.location.href = '/';
    };

    const retornaDadosPersonal = async () => {
        try {
            const response = await url.get(`/api/personal/${id}`);
            const person = response.data;

            const lRetorno = [];
            const nome = person.nome;
            lRetorno.push({
                nome: nome
            });

            setPerson(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar DadosPersonal:', error);
        }
    }

    useEffect(() => {
        retornaDadosPersonal()
    }, []);

    return (
        <div style={styles.header}>
            <div style={styles.Icon}>
                <FitnessCenterIcon sx={{ color: 'white', fontSize: 60 }} />
            </div>

            <div style={styles.divBox}>
                <div style={styles.divLinks}>
                    <Link to={`/dashboard/${id}`} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                    <Link to={`/alunos/${id}`} style={{ textDecoration: 'none', color: 'white', marginLeft: 30 }}>ALUNOS</Link>
                </div>

                <div style={styles.divP}>
                    {person && person.map((item, index) => (
                        <div key={index}>
                            <p>{item.nome}</p>
                        </div>
                    ))}
                    <LogoutIcon onClick={logout} style={{ cursor: "pointer", marginLeft: 20, fontSize: 34 }} />
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
        // justifyContent: "space-between",
        width: 450,
        textTraformation: "none",
        fontSize: 20,
        fontWeight: 'bold'
    }
}