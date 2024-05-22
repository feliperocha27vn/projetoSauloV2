import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import InicialPage from "./components/InicialPage";
import CadastroFornecedor from "./components/Cadastros/CadastroFornecedor";
import CadastroUsuario from "./components/Cadastros/CadastroUsuario";
import CadastroVenda from "./components/Cadastros/CadastroVenda";
import CadastroCidade from "./components/Cadastros/CadastroCidade";
import CadastroCategoria from "./components/Cadastros/CadastroCategoria";
import CadastroProduto from "./components/Cadastros/CadastroProduto";
import CadastroTelefone from "./components/Cadastros/CadastroTelefone";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/PaginaInicial" element={<InicialPage />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/CadastroVenda" element={<CadastroVenda />} />
        <Route path="/CadastroCidade" element={<CadastroCidade />} />
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
        <Route path="/CadastroTelefone" element={<CadastroTelefone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
