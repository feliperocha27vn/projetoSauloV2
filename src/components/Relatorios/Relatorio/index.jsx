import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import {
  faBoxesStacked,
  faHandHoldingDollar,
  faPercent,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import { Navigate, useNavigate } from "react-router-dom";

export default function Relatorio() {

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
      <HeaderCadsatro label="RELATÓRIOS" />
      <div className="flex justify-center items-center h-[40rem]">
        {/* grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-11">
          {/* contas a receber */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faSackDollar} className="h-[80px]" />
              <div className="flex justify-center w-full"  >
                <label htmlFor="" className="font-bold font-sans text-lg"onClick={irContasReceber}>
                CONTAS A RECEBER
              </label>
            </div>
          </div>
          {/* mais vendidos */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irMaisVendidos}>
                MAIS VENDIDOS
              </label>
            </div>
          </div>
          {/* mais vendidos por empresa */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBuilding} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irPorEmpresa}>
                MAIS VENDIDOS POR EMPRESA
              </label>
            </div>
          </div>
          {/* movimentação de estoque */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBoxesStacked} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irEstoque}>
                MOVIMENTAÇÃO DE ESTOQUE
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faPercent} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={irComissao}>
                COMISSÃO
              </label>
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
