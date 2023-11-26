import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useParams } from 'react-router-dom';
import url from '../../service/service';
import logoBranco from '../../LogoBranco.png' 

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.header}>
            <div style={styles.Icon}>
                <img src={logoBranco} alt="logoBranco" width="150" height="100"/>
            </div>

            <div style={styles.divBox}>
                <div style={styles.divLinks}>
                    <Link to={`/dashboard/${id}`} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                    <Link to={`/alunos/${id}`} style={{ textDecoration: 'none', color: 'white', marginLeft: 30 }}>ALUNOS</Link>
                    <Link to={`/controlePagamento/${id}`} style={{ textDecoration: 'none', color: 'white', marginLeft: 30 }}>PAGAMENTOS</Link>
                    <Link to={`/cadastroAluno/${id}`} style={{ textDecoration: 'none', color: 'white', marginLeft: 30 }}>CADASTRAR</Link>
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
        height: 75,
        marginTop: 15,
        alignItems: 'center',
        display: 'flex',
        borderRadius: 10,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
    },
    Icon: {
        float: 'left',
        marginLeft: 0
    },
    divBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginLeft: 0
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
        width: 450,
        textTraformation: "none",
        fontSize: 20,
        fontWeight: 'bold'
    }
}