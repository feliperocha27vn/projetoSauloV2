import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];

const funcionarios = [
  // objetos
  {
    nome: "Romilson",
    totalVendido: "25.000,00",
    comissao: 2,
    valorAPagar: 500
  },
  {
    nome: "Junior",
    totalVendido: "20.000,00",
    comissao: 1,
    valorAPagar: 200
  }
];

export default function Comissoes() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="COMISSÕES" />
      <div className="flex justify-center items-center mt-4">
        <div className="w-11/12 h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          {/* inputs */}
          <div className="p-4 flex items-center gap-x-4">
            <label htmlFor="" className="text-sm font-bold text-white">
              INSIRA A DATA INICIAL
            </label>
            <Input
              type="date"
              id="quantidade_produto"
              placeholder=""
              className="flex h-10 w-60 rounded-md border border-neutral-200
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
              id="quantidade_produto"
              placeholder=""
              className="flex h-10 w-60 rounded-md border border-neutral-200
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
            <Autocomplete
              id="descricao_produto"
              options={options}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    className="flex h-10 w-64 rounded-md border border-neutral-200
                      bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                      file:text-sm file:font-medium placeholder:text-neutral-500 
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                      focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                       dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                        dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                        text-black mt-1 font-normal"
                    placeholder="INSIRA O NOME DO FUNCIONÁRIO"
                  />
                </div>
              )}
            />
            <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1 text-white">
              BUSCAR
            </button>
          </div>
          <div className="w-11/12 border-2 border-black bg-white rounded-xl">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black">
              <label htmlFor="" className="font-semibold ">
                FUNCIONÁRIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                TOTAL VENDIDO
              </label>
              <label htmlFor="" className="font-semibold text-center ">
                COMISSÃO
              </label>
              <label htmlFor="" className="font-semibold text-right">
                VALOR A PAGAR
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {funcionarios.map((funcionario) => (
                <div
                  key={funcionario.id}
                  className="grid grid-cols-4 p-2 border-b-2 border-black"
                >
                  <label htmlFor="" className="">
                    {funcionario.nome}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {funcionario.totalVendido}
                  </label>
                  <label htmlFor="" className="text-center">
                    {funcionario.comissao}%
                  </label>
                  <label htmlFor="" className="text-right">
                    {funcionario.valorAPagar}
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
