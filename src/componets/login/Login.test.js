

import { render, screen } from '@testing-library/react';
import { Login } from './Login';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';






  describe('Login Component', () => {
  
  test('carregamento dos componentes do login', () => {
    render(<Router><Login /></Router>);

    const enterButton = screen.getByText('ENTRAR');
    expect(enterButton).toBeInTheDocument();

//verifica se os campos de usuário e senha foi carregado 
  expect(screen.getByLabelText(/Usuário/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();


   //verifica se o botão "ENTRAR" foi carregado 
  expect(screen.getByRole('button', { name: /ENTRAR/i })).toBeInTheDocument();


   //verifica se o loading não está sendo renderizado
  expect(screen.queryByRole('progressbar')).toBeNull();
   
  });
});



