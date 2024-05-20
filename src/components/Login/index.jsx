import { CircleUserRound } from "lucide-react";
import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png"

export default function Login() {
  return (
    <GradientWrapper>
      {/* alinhando ao centro */}
      <div className="flex flex-col items-center">
        {/* criando espaço para os inputs */}
        <div className="w-6/12 h-[90px] bg-white mt-6 rounded-lg">
          {/* configurando espaçamentos */}
          <div className="flex h-full items-center justify-evenly">
            <CircleUserRound className="h-[90px] w-[90px]" />
            {/* input 1 */}
            <div className="flex flex-col">
              <label className="font-bold text-lg">Usuário</label>
              <input
                type="text"
                className="border border-black rounded-md p-0.5"
              />
            </div>
            {/* input 2 */}
            <div className="flex flex-col">
              <label className="font-bold text-lg">Senha</label>
              <input
                type="text"
                className="border border-black rounded-md p-0.5"
              />
            </div>
            <button className="bg-second-color p-2 w-36 rounded-md font-bold border border-black">
              Entrar
            </button>
          </div>
        </div>
        <img src={LogoClothing} alt="Logo da clothing" className="w-[50rem]"/>
      </div>
    </GradientWrapper>
  );
}
