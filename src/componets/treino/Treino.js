import React, { useState } from 'react'
import { HeaderApp } from '../headerApp/HeaderApp';
// import { TabelaComInclusao } from './TabelaComInclusao';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { TreinoA } from './TreinoA';
import { TreinoB } from './TreinoB';
import { TreinoC } from './TreinoC';
import { TreinoD } from './TreinoD';

export const Treino = () => {

    const [selectedView, setSelectedView] = useState("view1")
    const location = useLocation();
    const itemId = location.state?.itemId;
    console.log(itemId)

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

    return (
        <div style={styles.containerPrincipal}>
            <div style={styles.containerSecundaria}>
                <HeaderApp />

                <div style={styles.treinos}>
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
        justifyContent: "flex-end",
        marginBottom: 10
    },
    selectedButton: {
        backgroundColor: '#d32f2f', /* Cor de fundo verde como exemplo */
        color: '#ffffff', /* Cor do texto branco como exemplo */

    }
};
// export const Treino = () => {
//     const location = useLocation();
//     const itemId = location.state?.itemId;
//     console.log(itemId)

//     const [dados, setDados] = useState([]);

//     const [novoExercicio, setNovoExercicio] = useState({
//         exercicio: '',
//         serie: '',
//         repeticoes: '',
//         carga: '',
//         observacao: '',
//     });

//     const adicionarExercicio = () => {
//         setDados([...dados, { ...novoExercicio }]);
//         setNovoExercicio({
//             exercicio: '',
//             serie: '',
//             repeticoes: '',
//             carga: '',
//             observacao: '',
//         });
//     };

//     const repetirFormulario = () => {
//         const inputs = [];
//         for (let i = 0; i < 8; i++) {
//             inputs.push(
//                 <Grid sx={{ margin: -2.5, justifyContent: "center", padding: 0, }} container spacing={3.5} key={i}>
//                     <Grid item xs={2}>
//                         <TextField
//                             label="Exercício"
//                             variant="outlined"
//                             size='small'
//                             value={novoExercicio.exercicio}
//                             onChange={(e) => setNovoExercicio({ ...novoExercicio, exercicio: e.target.value })}
//                         />
//                     </Grid>
//                     <Grid item xs={1.5}>
//                         <TextField
//                             label="Série"
//                             // type="number"
//                             variant="outlined"
//                             size='small'
//                             value={novoExercicio.serie}
//                             onChange={(e) => setNovoExercicio({ ...novoExercicio, serie: parseInt(e.target.value) || 0 })}
//                         />
//                     </Grid>
//                     <Grid item xs={1.5}>
//                         <TextField
//                             label="Repetições"
//                             // type="number"
//                             variant="outlined"
//                             size='small'
//                             value={novoExercicio.repeticoes}
//                             onChange={(e) => setNovoExercicio({ ...novoExercicio, repeticoes: parseInt(e.target.value) || 0 })}
//                         />
//                     </Grid>
//                     <Grid item xs={1.5}>
//                         <TextField
//                             label="Carga"
//                             variant="outlined"
//                             size='small'
//                             value={novoExercicio.carga}
//                             onChange={(e) => setNovoExercicio({ ...novoExercicio, carga: e.target.value })}
//                         />
//                     </Grid>
//                     <Grid item xs={2}>
//                         <TextField
//                             label="Observação"
//                             variant="outlined"
//                             size='small'
//                             value={novoExercicio.observacao}
//                             onChange={(e) => setNovoExercicio({ ...novoExercicio, observacao: e.target.value })}
//                         />
//                     </Grid>
//                 </Grid>
//             );
//         }
//         return inputs;
//     };

//     return (
//         <div style={styles.containerPrincipal}>
//             <div style={styles.containerSecundaria}>
//                 <HeaderApp />
//                 {/* Detalhamentos e treinos */}
//                 <div style={styles.titulo}>
//                     <h2>Detalhamento de Treinos</h2>
//                     <div style={styles.listaTreino}>
//                         <Button size='small' variant="contained" >Treino A</Button>
//                         <Button size='small' variant="contained" >Treino B</Button>
//                         <Button size='small' variant="contained" >Treino C</Button>
//                         <Button size='small' variant="contained" >Treino D</Button>
//                     </div>
//                 </div>
//                 {/* Subtítulo Detalhamento do treino do aluno tal */}
//                 <div style={styles.subTitulo}>
//                     <p style={styles.paragrafoSubTitulo}>DETALHAMENTO DO TREINO</p>
//                 </div>

//                 <div style={styles.espacoTreinos}>
//                     {repetirFormulario()}
//                 </div>

//                 <Button style={styles.btnTreino} variant="contained" onClick={adicionarExercicio}>
//                     Salvar treino
//                 </Button>
//             </div>
//         </div>
//     )
// }

// const styles = {
//     containerPrincipal: {
//         backgroundColor: '#1F2B45',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         minHeight: '100vh',
//     },
//     containerSecundaria: {
//         backgroundColor: '#E7E7E7',
//         width: '90%',
//         minHeight: '90vh',
//         display: 'flex',
//         flexDirection: "column",
//         alignItems: 'center',
//         boxShadow: '5px 5px 10px 0px rgba(0,0,0,0.7)',
//     },
//     titulo: {
//         width: '95%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginTop: 20,
//         marginBottom: 30,
//         fontWeight: 'bold',
//         fontSize: 'medium'
//     },
//     listaTreino: {
//         width: '50%',
//         display: 'flex',
//         justifyContent: 'space-evenly',
//     },
//     subTitulo: {
//         width: '95%',
//         // border: 10,
//         border: '#E7E7E7'
//     },
//     paragrafoSubTitulo: {
//         paddingBottom: 5,
//         borderBottom: '3px solid #B94E4E',
//         fontWeight: 'bold',
//         color: '#B94E4E'
//     },
//     espacoTreinos: {
//         width: "80%",
//         height: 300,
//         overflowY: "scroll", // Corrigido para 'overflowY'
//         backgroundColor: "#fff",
//     },
//     btnTreino: {
//         marginTop: 20,
//         // marginBottom: '20px'
//     },

// }