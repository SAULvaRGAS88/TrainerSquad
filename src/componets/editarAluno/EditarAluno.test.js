import '@testing-library/jest-dom/extend-expect';
import { render, screen,fireEvent, waitFor  } from '@testing-library/react';
import { EditarAluno } from './EditarAluno';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';









  describe('EditarAluno Component', () => {
    test('carregamento dos componentes de editar aluno', () => {
   render(<Router><EditarAluno /></Router>);

    const enditButton = screen.getByText('EDITAR CADASTRO');
    expect(enditButton).toBeInTheDocument();

 //verifica se os campos do usuario foram carregados
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
  

   //verifica se o botão "EDITAR CADASTRO" foi carregado 
   expect(screen.getByRole('button', { name: /EXCLUIR ALUNO/i })).toBeInTheDocument();

   //verifica se o botão "EXCLUIR ALUNO" foi carregado
   expect(screen.getByRole('button', { name: /EXCLUIR ALUNO/i })).toBeInTheDocument();


          });




  });



