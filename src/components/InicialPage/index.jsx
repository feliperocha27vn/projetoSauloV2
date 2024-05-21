import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cadastros = [
  { rotulo: "Cadastro de Fornecedores" },
  { rotulo: "Cadastro de Vendedores" },
  { rotulo: "Cadastro de Clientes" },
  { rotulo: "Cadastro de Vendas" },
  { rotulo: "Cadastro de Cidades" },
  { rotulo: "Cadastro de Produtos" },
  { rotulo: "Cadastro de Categorias" },
  { rotulo: "Cadastro de Telefones" },
  { rotulo: "Cadastro de Contas" },
  { rotulo: "Cadastro de Movimentação" },
  { rotulo: "Relatórios" },
];

export default function InicialPage() {
  return (
    <GradientWrapper>
      <div className="flex justify-end h-full">
        <img src={LogoClothing} className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute bottom-0 bg-black w-full h-16">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center space-x-2 mt-5 ml-2">
              <div className="flex flex-col space-y-1">
                <div className="bg-white w-[30px] h-[3px]"></div>
                <div className="bg-white w-[30px] h-[3px]"></div>
                <div className="bg-white w-[30px] h-[3px]"></div>
              </div>
              <label className="text-white font-bold">MENU</label>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2 bg-black">
            {cadastros.map((item) => (
              <DropdownMenuItem  className="font-bold text-white">{item.rotulo}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </GradientWrapper>
  );
}
