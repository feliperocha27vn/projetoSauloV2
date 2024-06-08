import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";

const vendas = [
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situcao: "CONCLUIDA",
  },

];

export default function vendasUpdate() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDAS REALIZADAS" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-11/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
  
         
          <div className="w-11/12 border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-6 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                VENDA Nº
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DATA GERAÇÃO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR DA CONTA
              </label>
              <label htmlFor="" className="font-semibold text-center">
               USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                STATUS
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {vendas.map((conta) => (
                <div
                  key={conta.id}
                  className="grid grid-cols-6 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {conta.numeroVenda}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.dataGeracao}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {conta.valorVenda}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.usuario}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.situcao}
                  </label>
                  <label className="text-center" >
                  <FontAwesomeIcon icon={faPencil} className="mr-5"/>
                  <FontAwesomeIcon icon={faCancel} color="red"/>
                  </label>
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
