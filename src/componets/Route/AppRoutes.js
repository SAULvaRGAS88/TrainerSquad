import React from 'react';
import { Route as RouterRoute, BrowserRouter, Routes } from 'react-router-dom';

import { TelaLogin } from '../TelaLogin/TelaLogin';
import { TelaDash } from '../TelaDash/TelaDash';
import { TelaCadastro } from '../TelaCadastro/TelaCadastro';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <RouterRoute element={<TelaLogin />} path="/" exact />
        <RouterRoute element={<TelaDash />} path="/dashboard" />
        <RouterRoute element={<TelaCadastro />} path="/cadastro" />
      </Routes>
    </BrowserRouter>
  )
}
