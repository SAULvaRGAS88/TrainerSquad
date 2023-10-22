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

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <RouterRoute element={<TelaInicial />} path="/" exact />
        <RouterRoute element={<Login />} path="login"/>
        <RouterRoute element={<DashBoard />} path="/dashboard" />
        <RouterRoute element={<CadastroAluno/>} path="/cadastroAluno" />
        <RouterRoute element={<ControlePagamento/>} path="/controlePagamento" />
        <RouterRoute element={<Treino/>} path="/treino"/>
        <RouterRoute element={<AvaliacaoFisica/>} path="/avaliacaoFisica"/>
        <RouterRoute element={<CadastroPersonal/>} path="/cadastroPersonal"/>
      </Routes>
    </BrowserRouter>
  )
}
