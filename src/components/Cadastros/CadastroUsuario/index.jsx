import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";

export default function CadastroUsuario() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="USUÁRIO" />
      <div className="flex justify-center items-center mt-14  ">
        <form action="" className="space-y-6 w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_fornecedor"
              placeholder="Escreva o nome do usuário"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              COMISSÃO:
            </Label>
            <Input
              type="text"
              id="cidade"
              placeholder="Escreva o valor da comissão"
            />
          </div>
          <Label htmlFor="nome" className="text-white font-bold">
              EMPRESA:
            </Label>
          <Autocomplete
            className="bg-white rounded-lg"
            disablePortal
            id="combo-box-demo"
            options={empresasCadastradas}
            sx={{ width: 384 }}
            renderInput={(params) => <TextField {...params}  />}
          />
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}

const empresasCadastradas = [
    { label: 'Distribuidora XYZ', year: 2022 },
];