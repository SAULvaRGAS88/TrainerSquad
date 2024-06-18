/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { TelaInicial } from './TelaInicial';

const mock = new MockAdapter(axios);

describe('TelaInicial Component', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('busca e registra mensagens do back-end', async () => {
    const message = 'Funcionando, PUM!!!!!!!!!!!!!!!!!!!!!!!';
    mock.onGet('/').reply(200, { message });

    const consoleLogSpy = jest.spyOn(console, 'log');
    render(<Router><TelaInicial /></Router>);

    // Aguarda que o console.log seja chamado com a mensagem após a resposta do backend
    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith('Mensagem do backend:', message);
    });

    consoleLogSpy.mockRestore();
  });

  test('carregamento dos botoes ENTRAR e CADASTRAR', () => {
    render(<Router><TelaInicial /></Router>);

    const enterButton = screen.getByText('ENTRAR');
    const registerButton = screen.getByText('CADASTRAR');

    expect(enterButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
