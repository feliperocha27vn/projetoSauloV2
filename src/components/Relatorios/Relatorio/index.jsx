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

export default function Relatorio() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="RELATÓRIOS" />
      <div className="flex justify-center items-center h-[40rem]">
        {/* grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-11">
          {/* contas a receber */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faSackDollar} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg">
                CONTAS A RECEBER
              </label>
            </div>
          </div>
          {/* mais vendidos */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg">
                MAIS VENDIDOS
              </label>
            </div>
          </div>
          {/* mais vendidos por empresa */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBuilding} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg">
                MAIS VENDIDOS POR EMPRESA
              </label>
            </div>
          </div>
          {/* movimentação de estoque */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBoxesStacked} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg">
                MOVIMENTAÇÃO DE ESTOQUE
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faPercent} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg">
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
