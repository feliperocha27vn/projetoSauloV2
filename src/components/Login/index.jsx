import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";

export default function Login() {
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
        <button className="text-white bg-second-color rounded-3xl font-bold w-[110px] p-2 ml-[3.8rem]">
          Entrar
        </button>
        <label className="text-white mt-28">
          Desenvolved By - Carlos Henrique - Felipe Rocha - Felipe Gomes -
          Fabiano Franco - Fábio Landin - Guilherme Aparecido - Luis Fernando
        </label>
      </div>
    </GradientWrapper>
  );
}
