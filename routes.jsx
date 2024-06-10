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
import UsuarioUpdate from "./src/components/Updates/UsuarioUpdate";
import FornecedorUpdate from "./src/components/Updates/FornecedorUpdate";
import ProdutoUpdate from "./src/components/Updates/ProdutoUpdate";
import ClienteUpdate from "./src/components/Updates/ClienteUpdate";
import CategoriaUpdate from "./src/components/Updates/CategoriaUpdate";
import TabelaPreco from "./src/components/Cadastros/TabelaPreco";
import CadastroEmpresa from "./src/components/Cadastros/CadastroEmpresa";
import EmpresaUpdate from "./src/components/Updates/EmpresaUpdate";



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
        <Route path="/Administracao" element={<Administracao />} />
        <Route path="/VendasUpdate" element={<VendasUpdate />} />
        <Route path="/UsuarioUpdate" element={<UsuarioUpdate />} />
        <Route path="/FornecedorUpdate" element={<FornecedorUpdate />} />
        <Route path="/ProdutoUpdate" element={<ProdutoUpdate />} />
        <Route path="/ClienteUpdate" element={<ClienteUpdate />} />
        <Route path="/CategoriaUpdate" element={<CategoriaUpdate/>}/>
        <Route path="/TabelaPreco" element={<TabelaPreco/>}/>
        <Route path="/CadastroEmpresa" element={<CadastroEmpresa/>}/>
        <Route path="/EmpresaUpdate" element={<EmpresaUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
