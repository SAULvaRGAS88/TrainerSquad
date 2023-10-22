import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const TabelaComInclusao = () => {
  const [dados, setDados] = useState([]);
  const [novaLinha, setNovaLinha] = useState({
    exercicio: '',
    serie: '',
    repeticoes: '',
    carga: '',
    observacao: '',
  });
  const [linhaEditando, setLinhaEditando] = useState(null);

  const adicionarLinha = () => {
    if (linhaEditando === null) {
      setDados([...dados, novaLinha]);
      setNovaLinha({
        exercicio: '',
        serie: '',
        repeticoes: '',
        carga: '',
        observacao: '',
      });
    }
  };

  const editarLinha = (index) => {
    setLinhaEditando(index);
  };

  const salvarEdicao = () => {
    setLinhaEditando(null);
  };

  const excluirLinha = (index) => {
    const novosDados = dados.filter((_, i) => i !== index);
    setDados(novosDados);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (linhaEditando !== null) {
      const novosDados = [...dados];
      novosDados[linhaEditando] = {
        ...novosDados[linhaEditando],
        [name]: value,
      };
      setDados(novosDados);
    } else {
      setNovaLinha({ ...novaLinha, [name]: value });
    }
  };

  const salvarDadosNoBackend = () => {
    // Implemente a lógica para enviar os dados para o back-end aqui.
    // Substitua este console.log pelo código real de envio.
    console.log('Enviando dados para o back-end:', dados);
  };

  return (
    // div que cobre os botões dos treinos e a tabela:
    <div style={styles.espacoTreinos}>
        {/* div somente dos botões dos treinos: */}
        <div>
            
        </div>
        <Paper>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>Exercício</TableCell>
                <TableCell>Série</TableCell>
                <TableCell>Repetições</TableCell>
                <TableCell>Carga</TableCell>
                <TableCell>Observação</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {dados.map((linha, index) => (
                <TableRow key={index}>
                <TableCell>
                    {linhaEditando === index ? (
                    <input
                        type="text"
                        name="exercicio"
                        value={linha.exercicio}
                        onChange={handleChange}
                    />
                    ) : (
                    linha.exercicio
                    )}
                </TableCell>
                <TableCell>
                    {linhaEditando === index ? (
                    <input
                        type="number"
                        name="serie"
                        value={linha.serie}
                        onChange={handleChange}
                    />
                    ) : (
                    linha.serie
                    )}
                </TableCell>
                <TableCell>
                    {linhaEditando === index ? (
                    <input
                        type="number"
                        name="repeticoes"
                        value={linha.repeticoes}
                        onChange={handleChange}
                    />
                    ) : (
                    linha.repeticoes
                    )}
                </TableCell>
                <TableCell>
                    {linhaEditando === index ? (
                    <input
                        type="number"
                        name="carga"
                        value={linha.carga}
                        onChange={handleChange}
                    />
                    ) : (
                    linha.carga
                    )}
                </TableCell>
                <TableCell>
                    {linhaEditando === index ? (
                    <input
                        type="text"
                        name="observacao"
                        value={linha.observacao}
                        onChange={handleChange}
                    />
                    ) : (
                    linha.observacao
                    )}
                </TableCell>
                <TableCell>
                    {linhaEditando === index ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={salvarEdicao}
                    >
                        Salvar
                    </Button>
                    ) : (
                    <>
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => editarLinha(index)}
                        >
                        Editar
                        </Button>
                        <Button
                        variant="outlined"
                        color="error"
                        onClick={() => excluirLinha(index)}
                        >
                        Excluir
                        </Button>
                    </>
                    )}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
            <br></br>
        <Button variant="contained" color="primary" onClick={adicionarLinha}>
            Incluir
        </Button>
        <input
            type="text"
            name="exercicio"
            value={novaLinha.exercicio}
            placeholder="Exercício"
            onChange={handleChange}
        />
        <input
            type="number"
            name="serie"
            value={novaLinha.serie}
            placeholder="Série"
            onChange={handleChange}
        />
        <input
            type="number"
            name="repeticoes"
            value={novaLinha.repeticoes}
            placeholder="Repetições"
            onChange={handleChange}
        />
        <input
            type="number"
            name="carga"
            value={novaLinha.carga}
            placeholder="Carga"
            onChange={handleChange}
        />
        <input
            type="text"
            name="observacao"
            value={novaLinha.observacao}
            placeholder="Observação"
            onChange={handleChange}
        />
        <Button
            variant="contained"
            color="primary"
            onClick={salvarDadosNoBackend}
            endIcon={<SendIcon />}
        >
            Salvar
        </Button>
        </Paper>
        
    </div>
  );
};

const styles = {
    espacoTreinos: {
        width: '90%'
    }
}