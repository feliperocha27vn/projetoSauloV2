import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";

const vendas = [
  {
    descricaoProduto: "Camisa Polo",
    unidadeVendidas: 200,
    valorTotal: "30.000,00",
  },
];

export default function MaisVendidos() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="MAIS VENDIDOS" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id="data_inicial"
              placeholder="INSIRA A DATA INICIAL"
              className="h-10 sm:w-36 md:w-48 lg:w-56 xl:w-64 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
            />
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA FINAL
            </label>
            <Input
              type="date"
              id="data_final"
              placeholder="INSIRA A DATA FINAL"
              className="h-10 sm:w-36 md:w-48 lg:w-56 xl:w-64 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
            />
            <button className="h-10 sm:w-28 md:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1">
              <label htmlFor="" className="text-white">
                BUSCAR
              </label>
            </button>
          </div>
          <div className="w-full sm:w-11/12 border-2 border-black bg-white rounded-xl mt-4">
            <div className="grid grid-cols-3 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO DO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                UNIDADES VENDIDAS
              </label>
              <label htmlFor="" className="font-semibold text-right">
                VALOR TOTAL
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] sm:h-[200px] overflow-auto">
              {vendas.map((venda, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {venda.descricaoProduto}
                  </label>
                  <label htmlFor="" className="text-center">
                    {venda.unidadeVendidas} UN
                  </label>
                  <label htmlFor="" className="text-right">
                    R$ {venda.valorTotal}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 text-white bg-black w-[150px] sm:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
