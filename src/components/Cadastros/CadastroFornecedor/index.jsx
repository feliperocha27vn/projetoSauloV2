import { useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroFornecedor() {
  const [message, setMessage] = useState  ('');

  const cadastraFornecedor = () => {
    setMessage('FORNECEDOR CADASTRADO');
  }
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE FORNECEDOR" />
      <div className="flex justify-center items-center mt-14">
        {/* formulario */}
        <form action="" className="flex flex-col gap-4 w-full max-w-md px-4">
          {/* nome do fornecedor */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="nome_fornecedor" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_fornecedor"
              placeholder="Escreva o nome do fornecedor"
              className="w-full"
            />
          </div>
          {/* nome da cidade */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cidade" className="text-white font-bold">
              CIDADE:
            </Label>
            <Input
              type="text"
              id="cidade"
              placeholder="Escreva o nome da sua cidade aqui"
              className="w-full"
            />
          </div>
          {/* cnpj do fornecedor */}
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cnpj" className="text-white font-bold">
              CNPJ:
            </Label>
            <Input
              type="text"
              id="cnpj"
              placeholder="Escreva o CNPJ aqui"
              className="w-full"
            />
          </div>
          {/* botao */}
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-full max-w-xs h-10 rounded-xl" onClick={cadastraFornecedor}>
            Confirmar
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
