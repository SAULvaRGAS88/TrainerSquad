import React from 'react';
import { useState } from 'react';
import { HeaderApp } from '../headerApp/HeaderApp';
import { TextField, MenuItem } from '@mui/material';import { useLocation } from 'react-router-dom';

export const AvaliacaoFisica = () => {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await url.post(`/api/avaliacao/${id}`, {
    //         sexo: sexo,
    //         nome: nomeAluno,
    //         cpf: cpf,
    //         dt_nascimento: dataNasc,
    //         telefone: telefone,
    //         email: email,
    //         plano: plano,
    //         pagamento: {
    //           dt_pagamento: dataPagamento,
    //           valor: valor
    //         }
    //       });
    //       if (response.status === 201) {
    
    //       }
    //     } catch (error) {
    //       console.error('Erro ao cadastrar:', error);
    //       setCadastroError(true);
    //     }
    //   };
    

    function calcularIMC() {
        const imcValue = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
        setImc(imcValue.toString());
      }

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


    const location = useLocation();
    const itemId = location.state?.itemId;
    console.log(itemId)
    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />
                <h2 style={{ margin: 10, fontWeight: 'bold' }}>Avaliação Física</h2>
                {/* TODOS OS QUADROS NESSA DIV */}
                <div style={styles.tresQuadros}>
                    {/* Quadro: dados gerais */}
                    <form style={styles.formDadosGerais}>
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
                            onChange={(e) => calcularIMC(e.target.value)}
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
                    <form style={styles.formDadosGerais}>
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
                    <form style={styles.formDadosGerais}>
                    <p style={{ margin: 5, fontWeight: 'bold', fontSize: 18, }}>Composição Corporal</p>
                        <TextField 
                            id="standard-basic"
                            label="Massa Magra"
                            variant="standard"
                            value={(41.955+(1.038786*peso))-(0.82816*(circunferenciaAbdomen-circunferenciaPunho))}
                            onChange={(e) => setMassaMagra(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField 
                            id="standard-basic"
                            label="Porcentagem gordura"
                            variant="standard"
                            value={((peso-(41.955+(1.038786*peso))-(0.82816*(circunferenciaAbdomen-circunferenciaPunho)))*100)/peso}
                            onChange={(e) => setPorcentagemGordura(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />
                        <TextField 
                            id="standard-basic"
                            label="Massa de gordura (kg)"
                            variant="standard"
                            value={(peso*((peso-(41.955+(1.038786*peso))-(0.82816*(circunferenciaAbdomen-circunferenciaPunho)))*100)/peso)/100}
                            onChange={(e) => setMassaDeGordura(e.target.value)}
                            inputProps={{
                                inputMode: 'text'
                            }}
                        />

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
    tresQuadros: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    formDadosGerais: {
        width: '30%',
        height: '55vh',
        backgroundColor: '#f5f3f3',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 20,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'
    }
}
