import { useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroCategoria() {
  const [message, setMessage] = useState('');

  const mensagem = () => {
    setMessage('CATEGORIA CADASTRADA');
  }
  
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE CATEGORIA" />
      <div className="flex justify-center items-center mt-14">
        <form action="" className="flex flex-col gap-4 w-full max-w-md px-4">
          {/* nome da categoria */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="id_categoria" className="text-white font-bold">
              CATEGORIA:
            </Label>
            <Input
              type="text"
              id="id_categoria"
              placeholder="Escreva o nome da categoria"
              className="w-full"
            />
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl" onClick={mensagem}>
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
