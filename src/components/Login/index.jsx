import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate()
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, se necessário
    // Se a autenticação for bem-sucedida, navegue para a página Inicial
    navigate("/CadastroFornecedor");}
  return (
    <GradientWrapper>
      <div className="flex flex-col items-center gap-5">
        <img src={LogoClothing} />
        <div className="space-x-2">
          <label className="text-white font-bold">Usuário</label>
          <input type="text" id="usuario" className="p-1 rounded-3xl" />
        </div>
        <div className="space-x-4">
          <label className="text-white font-bold">Senha</label>
          <input type="password" id="senha" className="p-1 rounded-3xl" />
        </div>
        <button className="text-white bg-second-color rounded-3xl font-bold w-[110px] p-2 ml-[3.8rem]" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </GradientWrapper>
  );
}
