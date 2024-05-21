import GradientWrapper from "../../GradientWrapper";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CadastroFornecedor() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="FORNECEDOR" />
      <div className="flex flex-col items-center mt-2 gap-y-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-white font-bold">
            NOME:
          </Label>
          <Input
            type="email"
            id="nome_fornecedor"
            placeholder="Escreva o nome do fornecedor"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-white font-bold">
            NOME:
          </Label>
          <Input
            type="email"
            id="nome_fornecedor"
            placeholder="Escreva o nome do fornecedor"
          />
        </div>
      </div>
    </GradientWrapper>
  );
}
