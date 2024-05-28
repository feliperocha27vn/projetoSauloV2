import GradientWrapper from "../GradientWrapper";
import LogoClothing from "../../assets/imgs/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cadastros = [
  { rotulo: "Cadastro de Fornecedores", caminho: "/CadastroFornecedor" },
  { rotulo: "Cadastro de Vendedores", caminho: "/CadastroVendedores" },
  { rotulo: "Cadastro de Clientes", caminho: "/CadastroClientes" },
  { rotulo: "Cadastro de Vendas", caminho: "/CadastroVendas" },
  { rotulo: "Cadastro de Cidades", caminho: "/CadastroCidade" },
  { rotulo: "Cadastro de Produtos", caminho: "/CadastroProduto" },
  { rotulo: "Cadastro de Categorias", caminho: "/CadastroCategoria" },
  { rotulo: "Cadastro de Telefones", caminho: "/CadastroTelefone" },
  { rotulo: "Cadastro de Contas", caminho: "/CadastroContasReceber" },
  { rotulo: "Cadastro de Movimentação", caminho: "/CadastroMovimentacaoEstoque" },
  { rotulo: "Relatórios", caminho: "/Relatorios" },
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
            {cadastros.map((item, index) => (
              <DropdownMenuItem key={index} className="font-bold text-white">
                {item.rotulo}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </GradientWrapper>
  );
}
