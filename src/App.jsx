import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import InicialPage from "./components/InicialPage";
import CadastroFornecedor from "./components/Cadastros/CadastroFornecedor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/PaginaInicial" element={<InicialPage />} />
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
