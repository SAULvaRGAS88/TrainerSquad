import React, { useState, useEffect } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { TreinoA } from './TreinoA';
import { TreinoB } from './TreinoB';
import { TreinoC } from './TreinoC';
import { TreinoD } from './TreinoD';
import url from '../../service/service';

export const Treino = () => {

    const [selectedView, setSelectedView] = useState("view1")
    const location = useLocation();
    const itemId = location.state?.itemId;
    // console.log(itemId, 'Treino')
    const [nomeAluno, setNomeAluno] = useState([]);

    const retornaNomeAluno = async () => {
        try {
            const response = await url.get(`/api/aluno/${itemId}`);
            const person = response.data;

            const lRetorno = [];
            const nome = person.nome;
            lRetorno.push({
                nome: nome
            });

            setNomeAluno(lRetorno);
            // console.log(lRetorno);
        } catch (error) {
            console.error('Erro ao consultar DadosPersonal:', error);
        }
    }

    const renderComponent = () => {
        if (selectedView === 'view1') {
            return <TreinoA />;
        } else if (selectedView === 'view2') {
            return <TreinoB />;
        } else if (selectedView === 'view3') {
            return <TreinoC />;
        } else if (selectedView === 'view4') {
            return <TreinoD />;
        } else {
            return null;
        }
    };

    const handleViewPress = (viewName) => {
        setSelectedView(viewName);
    };

    useEffect(() => {
        retornaNomeAluno();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <div style={styles.treinos}>
                    <div style={styles.divName}>
                        <div style={{ marginTop: 5, fontSize: 14, fontWeight: "bold" }}>
                            Aluno(ª) :
                            {nomeAluno &&
                                nomeAluno.map((item, index) => (
                                    <p key={index} style={{ display: 'inline-block', margin: 0, marginLeft: 5 }}>
                                        {item.nome}
                                    </p>
                                ))}</div>
                    </div>
                    <div>
                        <Button
                            sx={{ height: 40 }}
                            onClick={() => handleViewPress('view1')}
                            style={selectedView === 'view1' ? styles.selectedButton : {}}
                        >
                            Treino A
                        </Button>
                        <Button
                            sx={{ height: 40 }}
                            onClick={() => handleViewPress('view2')}
                            style={selectedView === 'view2' ? styles.selectedButton : {}}
                        >
                            <p>Treino B</p>
                        </Button>
                        <Button
                            sx={{ height: 40 }}
                            onClick={() => handleViewPress('view3')}
                            style={selectedView === 'view3' ? styles.selectedButton : {}}
                        >
                            <p>Treino C</p>
                        </Button>
                        <Button
                            sx={{ height: 40 }}
                            onClick={() => handleViewPress('view4')}
                            style={selectedView === 'view4' ? styles.selectedButton : {}}
                        >
                            <p>Treino D</p>
                        </Button>
                    </div>

                </div>
                {renderComponent()}
            </div>
        </div>
    );
};

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
    treinos: {
        paddingTop: 20,
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        alignItems: 'baseline',
    },
    selectedButton: {
        backgroundColor: '#d32f2f',
        color: '#ffffff',

    }
};