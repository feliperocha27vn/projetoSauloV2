import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import {
  faBoxesStacked,
  faHandHoldingDollar,
  faPercent,
  faSackDollar,
  faTags,
  faTicket,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import { Navigate, useNavigate } from "react-router-dom";

export default function Administracao() {

  const navigater = useNavigate()

  const irContasReceber= () =>{
    navigater("/ContasReceber")
  }
  const irMaisVendidos=()=>{
    navigater("/MaisVendidos")
  }
  const irPorEmpresa=()=>{
    navigater("/MaisVendidosEmpresa")
  }
  const irEstoque = ()=>{
    navigater("/MovimentacaoEstoque")
  }
  const irComissao=()=>{
    navigater("/Comissoes")
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="ADMINISTRAÇÃO" />
      <div className="flex justify-center items-center h-[40rem] ">
        {/* grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-11">
          {/* contas a receber */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faSackDollar} className="h-[80px]" />
              <div className="flex justify-center w-full"  >
                <label htmlFor="" className="font-bold font-sans text-lg"onClick={irContasReceber}>
                VENDAS
              </label>
            </div>
          </div>
          {/* mais vendidos */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faUserFriends} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irMaisVendidos}>
                USUARIOS
              </label>
            </div>
          </div>
          {/* mais vendidos por empresa */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBuilding} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irPorEmpresa}>
                FORNECEDORES
              </label>
            </div>
          </div>
          {/* movimentação de estoque */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBoxesStacked} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irEstoque}>
                PRODUTOS
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faUser} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irComissao}>
                CLIENTES
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faTags} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irComissao}>
                CATEGORIAS
              </label>
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
