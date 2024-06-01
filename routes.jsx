import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroFornecedor from "./src/components/Cadastros/CadastroFornecedor";
import CadastroVendedores from "./src/components/Cadastros/CadastroVendedores";
import Login from './src/components/Login/index'
import CadastroCidade from "./src/components/Cadastros/CadastroCidade";
import CadastroCategoria from "./src/components/Cadastros/CadastroCategoria";
import CadastroProduto from "./src/components/Cadastros/CadastroProduto";
import CadastroVenda from "./src/components/Cadastros/CadastroVenda";
import CadastroTelefone from "./src/components//Cadastros/CadastroTelefone";
import CadastroUsuario from "./src/components/Cadastros/CadastroVendedores";
//import CadastroContasReceber from "./components/Cadastros/CadastroContasReceber";
//import CadastroMovimentacaoEstoque from "./components/Cadastros/CadastroMovimentacaoEstoque";
//import Relatorios from "./components/Relatorios";
import InicialPage from "./src/components/InicialPage";
import CadastroClientes from "./src/components/Cadastros/CadastroClientes";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/InicialPage" element={<InicialPage/>}/>
        <Route path ="/CadastroUsuario" element={<CadastroUsuario/>}/>
        <Route path="/CadastroClientes" element={<CadastroClientes/>}/>
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroVendedores" element={<CadastroVendedores />} />
        <Route path="/CadastroVenda" element={<CadastroVenda />} />
        <Route path="/CadastroCidade" element={<CadastroCidade />} />
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
        <Route path="/CadastroTelefone" element={<CadastroTelefone />} />
        {/* <Route path="/CadastroContasReceber" element={<CadastroContasReceber />}  /> */}
        {/* <Route path="/CadastroMovimentacaoEstoque" element={<CadastroMovimentacaoEstoque />}  /> */}
        {/* <Route path="/Relatorios" element={<Relatorios />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;