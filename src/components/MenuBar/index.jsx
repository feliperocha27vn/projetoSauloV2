import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cadastros = [
 
  { rotulo: "Cadastro de Fornecedores", caminho: "/CadastroFornecedor" },
  { rotulo: "Cadastro de Usuário", caminho: "/CadastroUsuario" },
  { rotulo: "Cadastro de Clientes", caminho: "/CadastroClientes" },
  { rotulo: "Vendas", caminho: "/CadastroVenda" },
  { rotulo: "Cadastro de Cidades", caminho: "/CadastroCidade" },
  { rotulo: "Cadastro de Produtos", caminho: "/CadastroProduto" },
  { rotulo: "Cadastro de Categorias", caminho: "/CadastroCategoria" },
  //{ rotulo: "Cadastro de Telefones", caminho: "/CadastroTelefone" },
  // { rotulo: "Contas", caminho: "/ContasReceber" },
  // { rotulo: "Movimentação", caminho: "/MovimentacaoEstoque" },
  { rotulo: "Relatórios", caminho: "/Relatorios" },
  {rotulo: "Administração", caminho: "/Administracao"}
  // { rotulo: "Mais Vendidos", caminho: "/MaisVendidos" },
  // { rotulo: "Mais Vendidos Por Empresa", caminho: "/MaisVendidosEmpresa" },
  // { rotulo: "Movimentação de Estoque", caminho: "/MovimentacaoEstoque" },
];

export default function BarMenu() {
  const navigate = useNavigate();

  function sair(){

    navigate("/InicialPage");
  }

  return (
    <div className="flex items-center justify-between absolute bottom-0 bg-black w-full h-16">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="flex items-center space-x-2 ml-2">
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
            <DropdownMenuItem 
              key={item.rotulo} 
              className="font-bold text-white" 
              onClick={() => navigate(item.caminho)}
            >
              {item.rotulo}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <button className="flex items-center p-0.5 w-[70px] h-[30px] bg-white rounded-lg space-x-1 mr-2" onClick={sair}>
        <HomeIcon />
        <label htmlFor="" className="font-bold">
          SAIR
        </label>
      </button>
    </div>
  );
}
