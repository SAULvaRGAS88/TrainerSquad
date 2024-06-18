

import React from 'react';
import { render, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CadastroPersonal } from './CadastroPersonal';
import { MemoryRouter } from 'react-router-dom'; 



describe('CadastroPersonal', () => {
  it('deve chamar handleSubmit ao enviar o formulário', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <CadastroPersonal />
      </MemoryRouter>
    );

    //simula a digitação de valores
    fireEvent.change(getByLabelText('Nome'), { target: { value: 'Teste' } });
    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'teste@example.com' } });
    fireEvent.change(getByLabelText('Senha'), { target: { value: 'senha123' } });

    //simula o envio do formulário
    fireEvent.click(getByText('Criar'));


 });

  
  
});
