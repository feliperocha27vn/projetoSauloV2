import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroFornecedor from "./src/components/Cadastros/CadastroFornecedor";
import Login from "./src/components/Login/index";
import CadastroCidade from "./src/components/Cadastros/CadastroCidade";
import CadastroCategoria from "./src/components/Cadastros/CadastroCategoria";
import CadastroProduto from "./src/components/Cadastros/CadastroProduto";
import CadastroVenda from "./src/components/Cadastros/CadastroVenda";
import CadastroTelefone from "./src/components//Cadastros/CadastroTelefone";
import CadastroUsuario from "./src/components/Cadastros/CadastroVendedores";
import InicialPage from "./src/components/InicialPage";
import CadastroClientes from "./src/components/Cadastros/CadastroClientes";
import ContasReceber from "./src/components/Relatorios/ContasReceber";
import MaisVendidos from "./src/components/Relatorios/MaisVendidos";
import MaisVendidosEmpresa from "./src/components/Relatorios/MaisVendidosEmpresa";
import MovimentacaoEstoque from "./src/components/Relatorios/MovimentacaoEstoque";
import Relatorio from "./src/components/Relatorios/Relatorio";
import Comissoes from "./src/components/Relatorios/Comissoes";
import Administracao from "./src/components/Cadastros/Administracao";
import VendasUpdate from "./src/components/Updates/VendasUpdate";
function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/InicialPage" element={<InicialPage />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/CadastroClientes" element={<CadastroClientes />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/CadastroVenda" element={<CadastroVenda />} />
        <Route path="/CadastroCidade" element={<CadastroCidade />} />
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
        <Route path="/CadastroTelefone" element={<CadastroTelefone />} />
        <Route path="/ContasReceber" element={<ContasReceber />} />
        <Route path="/MaisVendidos" element={<MaisVendidos />} />
        <Route path="/MaisVendidosEmpresa" element={<MaisVendidosEmpresa />} />
        <Route path="/MovimentacaoEstoque" element={<MovimentacaoEstoque />} />
        <Route path="/Relatorios" element={<Relatorio />} />
        <Route path="/Comissoes" element={<Comissoes />} />
        <Route path="/Administracao" element={<Administracao/>}/>
        <Route path="/VendasUpdate" element={<VendasUpdate/>}/>
              </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
