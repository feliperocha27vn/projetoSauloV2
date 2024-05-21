import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroFornecedor() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="FORNECEDOR" />

      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-white font-bold">
            NOME:
          </Label>
          <Input
            type="text"
            id="nome_fornecedor"
            placeholder="Escreva o nome do fornecedor"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-white font-bold">
            CIDADE:
          </Label>
          <Input
            type="text"
            id="cidade"
            placeholder="Escreva o nome da cidade"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-white font-bold">
            CNPJ:
          </Label>
          <Input
            type="text"
            id="cnpj"
            placeholder="Escreva o cnpj do fornecedor"
          />
        </div>
        <button className="text-white font-bold bg-black w-[200px] h-[40px] rounded-xl">
          Cadastrar
        </button>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
