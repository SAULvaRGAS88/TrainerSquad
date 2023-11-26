import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderApp } from '../headerApp/HeaderApp';
import { TextField, MenuItem, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import url from '../../service/service';


export const AvaliacaoFisica = () => {

    const navigate = useNavigate()
    const [cadastroError, setCadastroError] = useState(false);
    const [objetivo, setObjetivo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [circunferenciaPunho, setCircunferenciaPunho] = useState('');
    const [circunferenciaAbdomen, setCircunferenciaAbdomen] = useState('');
    const [circunferenciaGluteos, setCircunferenciaGluteos] = useState('');
    const [massaMagra, setMassaMagra] = useState('');
    const [porcentagemGordura, setPorcentagemGordura] = useState('');
    const [massaDeGordura, setMassaDeGordura] = useState('');
    const [massaMuscular, setMassaMuscular] = useState('');
    const [porcentagemMassaMuscular, setPorcentagemMassaMuscular] = useState('');
    const { id } = useParams();
    const location = useLocation();
    const itemId = location.state?.itemId;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await url.post(`/api/avaliacao/${itemId}`, {
                objetivo: objetivo,
                peso: peso,
                altura: altura,
                imc: imc,
                idade: idade,
                sexo: sexo,
                circ_punho: circunferenciaPunho,
                circ_abd: circunferenciaAbdomen,
                circ_gluteo: circunferenciaGluteos,
                massa_gordura: massaDeGordura,
                porc_gordura: porcentagemGordura,
                massa_magra: massaMagra,
                porc_massa_musc: porcentagemMassaMuscular,
                massa_musc: massaMuscular
            });
            if (response.status === 201) {
                setCadastroError()
                navigate(`/dashboard/${id}`)
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setCadastroError(true);
        }
    };

    useEffect(() => {
        if(peso && altura) {
            const imcCalculado = peso / (altura * altura)
            setImc(imcCalculado.toFixed(2))
        }
    }, [peso, altura]);

    useEffect(() => {
        if (peso && circunferenciaAbdomen && circunferenciaPunho) {
            const massaDeGorduraCalculada = (peso * ((peso - ((41.955 + (1.038786 * peso)) - (0.82816 * (circunferenciaAbdomen - circunferenciaPunho)))) * 100) / peso) / 100
            setMassaDeGordura(massaDeGorduraCalculada.toFixed(2))
        }
    },[peso, circunferenciaAbdomen, circunferenciaPunho]);

    useEffect(() => {
        if(peso && circunferenciaAbdomen && circunferenciaPunho){
        const porcentagemGorduraCalculada = ((peso - ((41.955 + (1.038786 * peso)) - (0.82816 * (circunferenciaAbdomen - circunferenciaPunho)))) * 100) / peso
        setPorcentagemGordura(porcentagemGorduraCalculada.toFixed(2))
        }
    },[peso, circunferenciaAbdomen, circunferenciaPunho]);

    useEffect(() => {
        if(peso && circunferenciaAbdomen && circunferenciaPunho){
            const massaMagraCalculada = (41.955 + (1.038786 * peso)) - (0.82816 * (circunferenciaAbdomen - circunferenciaPunho))
            setMassaMagra(massaMagraCalculada.toFixed(2))
        }
    },[peso, circunferenciaAbdomen, circunferenciaPunho]);

    useEffect(() => {
        if(peso && altura && idade && sexo){
            const massaMuscularCalculada = (peso * ((0.244 * peso) + (7.8 * altura) + (6.6 * 0) - (0.098 * idade) + (parseInt(sexo) - 3.3))) / 100
            setMassaMuscular(massaMuscularCalculada.toFixed(2))
        }
    }, [peso, altura, idade, sexo]);

    useEffect(() => {
        if(peso && altura && idade && sexo){
            const porcentagemMassaMuscularCalculada = (0.244 * peso) + (7.8 * altura) + (6.6 * 0) - (0.098 * idade) + (parseInt(sexo) - 3.3)
            setPorcentagemMassaMuscular(porcentagemMassaMuscularCalculada.toFixed(2))
        }
    },[peso, altura, idade, sexo]);
    
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <h2 style={{ margin: 10, fontWeight: 'bold' }}>Avaliação Física</h2>
                {/* TODOS OS QUADROS NESSA DIV */}
                <div style={styles.tresQuadros}>
                    {/* Quadro: dados gerais */}
                    <form style={styles.formDados}>
                        <p style={{ margin: 5, fontWeight: 'bold', fontSize: 18, }}>Dados Gerais</p>
                        <TextField
                            id="standard-basic"
                            label="Objetivo"
                            variant="standard"
                            value={objetivo}
                            onChange={(e) => setObjetivo(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Peso (kg)"
                            variant="standard"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Altura (ex: m.cm)"
                            variant="standard"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="IMC"
                            variant="standard"
                            value={imc}
                            onChange={(e) => setImc(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Idade"
                            variant="standard"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Sexo"
                            variant="standard"
                            select
                            value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                            sx={{ width: 200 }}
                        >
                            <MenuItem value="1" >Masculino</MenuItem>
                            <MenuItem value="0">Feminino</MenuItem>
                        </TextField>
                    </form>
                    <form style={styles.formDados}>
                        <p style={{ margin: 5, fontWeight: 'bold', fontSize: 18, }}>Antropometria</p>
                        <TextField
                            id="standard-basic"
                            label="Circunferência punho (cm)"
                            variant="standard"
                            value={circunferenciaPunho}
                            onChange={(e) => setCircunferenciaPunho(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 200 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Circunferência abdômen (cm)"
                            variant="standard"
                            value={circunferenciaAbdomen}
                            onChange={(e) => setCircunferenciaAbdomen(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 200 }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Circunferência glúteos (cm)"
                            variant="standard"
                            value={circunferenciaGluteos}
                            onChange={(e) => setCircunferenciaGluteos(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                            sx={{ width: 200 }}
                        />
                    </form>
                    <form style={styles.formDados}>
                        <p style={{ margin: 5, fontWeight: 'bold', fontSize: 18, }}>Composição Corporal</p>
                        <TextField
                            id="standard-basic"
                            label="Massa de gordura (kg)"
                            variant="standard"
                            value={massaDeGordura}
                            onChange={(e) => setMassaDeGordura(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Porcentagem gordura"
                            variant="standard"
                            value={porcentagemGordura}
                            onChange={(e) => setPorcentagemGordura(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Massa Magra"
                            variant="standard"
                            value={massaMagra}
                            onChange={(e) => setMassaMagra(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Massa Muscular (kg)"
                            variant="standard"
                            value={massaMuscular}
                            onChange={(e) => setMassaMuscular(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField
                            id="standard-basic"
                            label="Porcentagem massa muscular"
                            variant="standard"
                            value={porcentagemMassaMuscular}
                            onChange={(e) => setPorcentagemMassaMuscular(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />

                    </form>
                </div>
                <Button
                    onClick={handleSubmit}
                    style={styles.Button}
                    variant="contained">
                    <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} />
                    SALVAR AVALIAÇÃO
                </Button>
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
    tresQuadros: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    formDados: {
        width: '30%',
        height: '55vh',
        backgroundColor: '#f5f3f3',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 20,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    },
    Button: {
        marginTop: '20px',
        marginBottom: '10px'
    }
}
