import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import InicialPage from "./components/InicialPage";
import CadastroFornecedor from "./components/Cadastros/CadastroFornecedor";
import CadastroUsuario from "./components/Cadastros/CadastroUsuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/PaginaInicial" element={<InicialPage />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
