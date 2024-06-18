import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderApp } from './HeaderApp'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('HeaderApp Component', () => {
  test('Carregamento do HeaderApp', async () => {
  
    //carrega o componente
    render(<Router><HeaderApp /></Router>);

    //verifica se o componente  foi renderizado
    const headerElement = screen.getByTestId('header'); 
    expect(headerElement).toBeInTheDocument();

    //verifica a presença do ícone de logo
    const logoImage = screen.getByAltText('logoBranco'); //verifique se o alt está correto
    expect(logoImage).toBeInTheDocument();

    //verifica a presença dos links principais
    const linkHome = screen.getByText('HOME');
    const linkAlunos = screen.getByText('ALUNOS');
    const linkPagamentos = screen.getByText('PAGAMENTOS');
    const linkCadastrar = screen.getByText('CADASTRAR');

    expect(linkHome).toBeInTheDocument();
    expect(linkAlunos).toBeInTheDocument();
    expect(linkPagamentos).toBeInTheDocument();
    expect(linkCadastrar).toBeInTheDocument();

  });
});