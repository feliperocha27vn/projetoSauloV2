import { useState } from "react";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];
const produtos = ["Calça", "Blusa Listrada"]

export default function TabelaPreco() {
  const [message, setMessage] = useState('');

const produto = () => {
  setMessage('PREÇO CADASTRADO');
}
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CADASTRO DE PREÇOS" />
      <div className="flex justify-center items-center mt-14">
        <form action="" className="flex flex-col gap-4 w-96">
          {/* descrição do produto */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
               PRODUTO:
               <Autocomplete
                id="descricao_produto"
                options={produtos}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione o produto"
                    />
                  </div>
                )}
              />
            </Label>
            </div>
          {/* quantidade */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              PREÇO:
            </Label>
            <Input
              type="number"
              id="preço"
              placeholder="Escreva o preço do produto"
            />
          </div>
          {/* Autocomplete da descrição do produto */}
          <>
            <label className="text-white font-bold text-sm">
              CATEGORIA:{" "}
              <Autocomplete
                id="descricao_produto"
                options={options}
                renderInput={(params) => (
                  <div ref={params.InputProps.ref}>
                    <input
                      type="text"
                      {...params.inputProps}
                      className="flex h-10 w-full rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal"
                      placeholder="Digite a categoria do produto"
                    />
                  </div>
                )}
              />
            </label>
          </>
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl" onClick={produto}>
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
