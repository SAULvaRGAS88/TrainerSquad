import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, Modal, Box, Typography, TextField, Input, Select } from '@mui/material';
import { HeaderApp } from '../headerApp/HeaderApp';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import url from '../../service/service';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const EditarAluno = () => {

    const location = useLocation();
    const itemId = location.state?.itemId;
    console.log(itemId)

    const [cadastroError, setCadastroError] = useState(false);
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [plano, setPlano] = useState('');
    const [aluno, setAluno] = useState('');
    const [email, setEmail] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [dataPagamento, setDataPagamento] = useState('');
    const [valor, setValor] = useState('');
    const [status, setStatus] = useState('');
    const [alunoDb, setAlunoDb] = useState('');

    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await url.post(`/api/aluno/aluno/${id}`, {
                sexo: sexo,
                nome: aluno,
                cpf: cpf,
                dt_nascimento: dataNasc,
                telefone: telefone,
                email: email,
                plano: plano,
                pagamento: {
                    dt_pagamento: dataPagamento,
                    valor: valor
                }
            });
            if (response.status === 201) {

            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setCadastroError(true);
        }
    };

    // const formatCpf = (value) => {
    //     const numericValue = value.replace(/\D/g, '');
    //     const formattedCpf = numericValue.replace(
    //         /(\d{3})(\d{3})(\d{3})(\d{2})/,
    //         '$1.$2.$3-$4'
    //     );
    //     return formattedCpf;
    // };

    // const formatTelefone = (value) => {
    //     const numericValue = value.replace(/\D/g, '');
    //     const formattedTelefone = numericValue.replace(
    //         /(\d{2})(\d)(\d{4})(\d{4})/,
    //         '($1) $2 $3-$4'
    //     );
    //     return formattedTelefone;
    // };

    const handleDateChange = (novaData) => {
        setDataNasc(novaData);
    };
    const handleDatePagChange = (novaData) => {
        setDataPagamento(novaData);
    };

    const retornaAlunoDb = async () => {
        try {
            const response = await url.get(`/api/aluno/${itemId}`)
            const alunos = response.data;
            if (alunos) {
                const lRetorno = {
                    nome: alunos.nome,
                    id: alunos.id,
                    telefone: alunos.telefone,
                    sexo: alunos.sexo,
                    cpf: alunos.cpf,
                    dt_nascimento: alunos.dt_nascimento,
                    email: alunos.email,
                    status: alunos.status,
                    plano: alunos.plano

                };

                setAlunoDb(lRetorno);

            } else {
                console.log('Nenhum dado encontrado.');
            }
        } catch (error) {
            console.error('Erro ao consultar aluno:', error);
        }
    }

    const retornaPagamentoDb = async () => {
        try {
            const response = await url.get(`/api/pagamento/${itemId}`);
            const status = response.data;
            if (status) {
                const lRetorno = {
                    valor: status.valor,
                    dt_pagamento: status.dt_pagamento,
                    status: status.status,
                    id_aluno: status.id_aluno,
                    id: status.id
                }
                setStatus(lRetorno);
                console.log(lRetorno)
            } else {
                console.log('Nenhum dado encontrado.');
            }
        } catch (error) {
            console.error('Erro ao consultar Status:', error);
        }
    }

    useEffect(() => {
        retornaAlunoDb();
        retornaPagamentoDb();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId]);

    const opcoesPlano = ['Mensal', 'Trimestral', 'Semestral', "Anual"];
    const opcoesSexo = ['Masculino', 'Feminino', 'Não Informar'];
    const handleSexoChange = (e) => {
        setAlunoDb({ ...alunoDb, sexo: e.target.value });
    };
    const handleChangePlano = (e) => {
        setStatus({ ...status, plano: e.target.value });
    };

    const formatarData = (dataString) => {
        if (!dataString) {
            return "";
        }

        const ano = dataString.slice(0, 4);
        const mes = dataString.slice(5, 7);
        const dia = dataString.slice(8, 10);
        return `${dia}-${mes}-${ano}`;
    };

    return (

        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />

                <div style={styles.divDupla} >
                    <form style={styles.divCadastro} onSubmit={handleSubmit} >
                        <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Dados Pessoais</p>
                        <div style={{ marginLeft: 10 }}>
                            <div style={{}}>
                                <InputLabel htmlFor="nome">Nome</InputLabel>
                                <Input
                                    id="nome"
                                    type="text"
                                    value={alunoDb.nome}
                                    onChange={(e) => setAlunoDb({ ...alunoDb, nome: e.target.value })}
                                    inputProps={{
                                        inputMode: 'text',
                                    }}
                                    sx={{ width: 300 }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="cpf">CPF</InputLabel>
                                <Input
                                    id="nome"
                                    type="text"
                                    value={alunoDb.cpf}
                                    onChange={(e) => setAlunoDb({ ...alunoDb, cpf: e.target.value })}
                                    inputProps={{
                                        inputMode: 'text',
                                    }}
                                    sx={{ width: 300 }}
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="Telefone">Telefone</InputLabel>
                                <Input
                                    id="nome"
                                    type="text"
                                    value={alunoDb.telefone}
                                    onChange={(e) => setAlunoDb({ ...alunoDb, telefone: e.target.value })}
                                    inputProps={{
                                        inputMode: 'text',
                                    }}
                                    sx={{ width: 300 }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="email">E-mail</InputLabel>
                                <Input
                                    id="nome"
                                    type="text"
                                    value={alunoDb.email}
                                    onChange={(e) => setAlunoDb({ ...alunoDb, email: e.target.value })}
                                    inputProps={{
                                        inputMode: 'text',
                                    }}
                                    sx={{ width: 300 }}
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="sexo">Sexo</InputLabel>
                                <Select
                                    id="sexo"
                                    value={alunoDb.sexo || opcoesSexo[0]}
                                    onChange={handleSexoChange}
                                    sx={{ width: 300 }}
                                >
                                    {opcoesSexo.map((opcao, index) => (
                                        <MenuItem key={index} value={opcao}>
                                            {opcao}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>

                            <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data Nascimento: </p>
                                <p style={{ marginLeft: 10, marginRight: 10 }}>
                                    {formatarData(alunoDb.dt_nascimento)}
                                </p>
                                <LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        style={{ borderColor: 'red' }}
                                        format='DD-MM-YYYY'
                                        onChange={handleDateChange}
                                        value={dataNasc}
                                        sx={{ width: 175 }}
                                    />
                                </LocalizationProvider>
                            </div>

                        </div>

                    </form>

                    <form style={styles.divPagamentos} onSubmit={handleSubmit}>

                        <p style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>Pagamento</p>
                        <div style={{ marginLeft: 10 }}>
                            <div>
                            <InputLabel htmlFor="plano">Plano</InputLabel>
                                <Select
                                    id="plano"
                                    value={alunoDb.plano || opcoesPlano[0]}
                                    onChange={handleChangePlano}
                                    sx={{ width: 300 }}
                                >
                                    {opcoesPlano.map((opcao, index) => (
                                        <MenuItem key={index} value={opcao}>
                                            {opcao}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>

                            <div style={{ marginLeft: -10, marginTop: 5 }}>
                                <FormControl fullWidth={false} sx={{ m: 1 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        label="Amount"
                                        value={status.valor}
                                    onChange={(e) => setAlunoDb({ ...status, valor: e.target.value })}
                                        sx={{ width: 150 }}
                                    />
                                </FormControl>
                            </div>

                            <div style={{ display: "flex", marginTop: 5, marginBottom: -10, }}>
                                <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Data de Pagamento: </p>
                                <LocalizationProvider locale={ptBR} dateAdapter={AdapterDayjs}>
                                <p style={{ marginLeft: 10, marginRight: 10 }}>
                                    {formatarData(status.dt_pagamento)}
                                </p>
                                    <DatePicker
                                        style={{ borderColor: 'red' }}
                                        format='DD-MM-YYYY'
                                        onChange={handleDatePagChange}
                                        value={dataPagamento}
                                        sx={{ width: 150 }}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>

                    </form>
                </div>

                <div style={{ width: "60%", alignItems: 'center', display: "flex", flexDirection: "row", marginTop: 20, justifyContent: 'center' }}>
                    {/* <Button
            component={Link}
            to="/avaliacaoFisica"
            style={styles.Button}
            variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> CADASTRAR AVALIAÇÂO FíSICA</Button> */}
                    {cadastroError && <p>Ocorreu um erro ao cadastrar. Verifique os dados.</p>}
                    <Button
                        onClick={() => { }}
                        style={styles.Button}
                        variant="contained"> <PersonAddAltIcon style={{ fontSize: 40, color: 'green' }} /> EDITAR CADASTRO</Button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box style={styles.style}>
                            <Typography id="modal-modal-description" sx={{ mt: 10, mb: 10 }}>
                                Aluno Cadastrado com Sucesso!
                            </Typography>
                        </Box>
                    </Modal>

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
    divDupla: {
        width: '95%',
        minHeight: '56vh',
        marginTop: 20,
        display: "flex",
        justifyContent: 'space-between',


    },
    divCadastro: {
        backgroundColor: '#f5f3f3',
        width: '48%',
        height: '60vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 20,
    },
    divPagamentos: {
        backgroundColor: '#f5f3f3',
        width: '45%',
        height: '43vh',
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        borderRadius: 20,
    },
    Button: {
        width: '40%',
        height: 50,
        boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
        backgroundColor: '#f5f3f3',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        borderRadius: 50
    },
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 10,
        boxShadow: 24,
        p: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        display: 'flex'
    },
}