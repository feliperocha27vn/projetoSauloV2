import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
  const navigate = useNavigate()
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, se necessário
    // Se a autenticação for bem-sucedida, navegue para a página Inicial
    navigate("/InicialPage");}

    const cadastrarUsuario= () => {
      navigate ("/cadastroUsuario")
    }
  return (
    <GradientWrapper>
      <div className="flex flex-col items-center gap-5">
        <img src={LogoClothing} className="w-[23rem]" />
        <div className="flex flex-col ml-4">
          <label className="text-white font-bold">Usuário</label>
          <input type="text" id="usuario" className="p-1 rounded-3xl w-[230px]" />
        </div>
        <div className="flex flex-col ml-4">
          <label className="text-white font-bold">Senha</label>
          <input type="password" id="senha" className="p-1 rounded-3xl w-[230px]" />
        </div>
        <div className="flex gap-x-2">
        <button className="text-white bg-second-color rounded-3xl font-bold w-[100px] p-2 ml-3" onClick={handleLogin}>
          Entrar
        </button>
        <button className="text-white  bg-second-color rounded-3xl font-bold w-[100px] p-2  ml-3" onClick={cadastrarUsuario} >
          Cadastrar
        </button> 
        </div>
       
       
        
      </div>
    </GradientWrapper>
  );
}
