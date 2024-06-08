import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];

const vendasEmpresa = [
  {
    descricaoProduto: "Calça",
    unidadesVendidas: "500",
    valorTotal: "50.000,00",
  },
];

export default function MaisVendidosEmpresa() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="MAIS VENDIDOS POR EMPRESA" />
      <div className="flex flex-col items-center mt-4">
        <div className="w-full lg:w-3/4 xl:w-2/3 rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex flex-col sm:flex-row items-center gap-x-4 w-full">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id="data_inicial"
              placeholder="INSIRA A DATA INICIAL"
              className="h-10 w-full sm:w-auto rounded-md border border-neutral-200
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
              className="h-10 w-full sm:w-auto rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
            />
            <Autocomplete
              id="descricao_produto"
              options={options}
              renderInput={(params) => (
                <div ref={params.InputProps.ref} className="w-full">
                  <input
                    type="text"
                    {...params.inputProps}
                    className="h-10 w-full rounded-md border border-neutral-200
                      bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                      file:text-sm file:font-medium placeholder:text-neutral-500 
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                      focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                        dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                        text-black mt-1 font-normal"
                    placeholder="INSIRA A EMPRESA"
                  />
                </div>
              )}
            />
            <button className="h-10 w-full sm:w-auto bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white">
              BUSCAR
            </button>
          </div>
          <div className="w-full border-2 border-black bg-white rounded-xl mt-4">
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
            <div className="h-[300px] lg:h-[200px] overflow-auto">
              {vendasEmpresa.map((vendaEmpresa, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {vendaEmpresa.descricaoProduto}
                  </label>
                  <label htmlFor="" className="text-center">
                    {vendaEmpresa.unidadesVendidas} UN
                  </label>
                  <label htmlFor="" className="text-right">
                    R$ {vendaEmpresa.valorTotal}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 text-white bg-black w-full sm:w-[150px] lg:w-[200px] m-2 rounded-xl font-semibold">
            IMPRIMIR
          </button>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
