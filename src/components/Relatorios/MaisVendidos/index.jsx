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
        <div className="w-11/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex items-center gap-x-4">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id=""
              placeholder="INSIRA A QUANTIDADE DO PRODUTO"
              className="flex h-10 w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              inputmode="numeric"
              pattern="\d*"
            />
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA FINAL
            </label>
            <Input
              type="date"
              id=""
              placeholder="INSIRA A QUANTIDADE DO PRODUTO"
              className="flex h-10 w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
              inputmode="numeric"
              pattern="\d*"
            />
            <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1">
              <label htmlFor="" className="text-white">
                BUSCAR
              </label>
            </button>
          </div>
          <div className="w-11/12 border-2 border-black bg-white rounded-xl">
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
            <div className="h-[300px] overflow-y-auto">
              {vendas.map((venda) => (
                <div
                  key={venda.id}
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
          <button className="p-2 text-white bg-black w-[150px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
