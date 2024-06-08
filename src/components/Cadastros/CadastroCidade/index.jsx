import { useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroCidade() {
  const [message, setMessage] = useState('');

  const cidade = () => {
    setMessage('CIDADE CADASTRADA');
  }
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE CIDADE" />
      <div className="flex justify-center items-center mt-14">
      <form action="" className="flex flex-col gap-4 w-96">
          {/* nome da cidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_cidade"
              placeholder="Escreva o nome da cidade"
            />
          </div>
          {/* estado */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              ESTADO/UF:
            </Label>
            <Input type="text" id="estado" placeholder="Escreva o estado" />
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl" onClick={cidade}>
              Cadastrar
            </button>
          </div>
          {message && (
            <div className="mt-4 lg:mt-12 p-2 bg-green-500 text-white rounded font-bold text-center">
              {message}
            </div>
          )}
        </form>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
