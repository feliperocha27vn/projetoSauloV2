import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

const options = ["Option 1", "Option 2"];

export default function CadastroUsuario() {
  const [message, setMessage] = useState('');

  const usuario = () => {
    setMessage('USUARIO CADASTRADO');
  }


  return (
    <GradientWrapper>
      <HeaderCadsatro label="USUÁRIO" />
      <div className="flex justify-center items-center mt-3">
        <form action="" className="flex flex-col gap-4 w-full md:w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_usuario"
              placeholder="Escreva o nome do usuário"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="senha" className="text-white font-bold">
              SENHA:
            </Label>
            <Input
              type="password"
              id="senha_usuario"
              placeholder="Cadastre uma senha"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5"></div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              COMISSÃO:
            </Label>
            <Input
              type="number"
              id="cidade"
              placeholder="Escreva o valor da comissão... EX: (10%)"
            />
          </div>
          <div>
            <label className="text-white font-bold">
              EMPRESA:{" "}
              <Autocomplete
                id="id_empresa"
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
                      text-black mt-1 font-normal font-sm"
                      placeholder="Selecione a empresa"
                    />
                  </div>
                )}
              />
            </label>
          </div>
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl" onClick={usuario}>
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
