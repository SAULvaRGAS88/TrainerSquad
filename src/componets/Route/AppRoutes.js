import React from 'react';
import { Route as RouterRoute, BrowserRouter, Routes } from 'react-router-dom';
import { Login } from '../login/Login';
import { DashBoard } from '../dashBoard/DashBoard';
import { CadastroAluno } from '../cadastro/CadastroAluno';
import { ControlePagamento } from '../controlePagamento/ControlePagamento';
import { Treino } from '../treino/Treino';
import { AvaliacaoFisica } from '../avaliacaoFisica/AvaliacaoFisica';
import { TelaInicial } from '../telaInicial/TelaInicial';
import { CadastroPersonal } from '../cadastroPersonal/CadastroPersonal';
import { AllAlunos } from '../allAlunos/AllAlunos';
import { EditarAluno } from '../editarAluno/EditarAluno';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <RouterRoute element={<TelaInicial />} path="/" exact />
        <RouterRoute element={<Login />} path="login" />
        <RouterRoute element={<DashBoard />} path="/dashboard/:id" />
        <RouterRoute element={<CadastroAluno />} path="/cadastroAluno/:id" />
        <RouterRoute element={<ControlePagamento />} path="/controlePagamento/:id" />
        <RouterRoute element={<Treino />} path="/treino/:id" />
        <RouterRoute element={<AvaliacaoFisica />} path="/avaliacaoFisica/:id" />
        <RouterRoute element={<CadastroPersonal />} path="/cadastroPersonal" />
        <RouterRoute element={<AllAlunos />} path="/alunos/:id" />
        <RouterRoute element={<EditarAluno />} path="/editarAluno/:id" />
      </Routes>
    </BrowserRouter>
  )
}
