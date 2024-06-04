import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";

const options = ["Option 1", "Option 2"];

export default function CadastroVenda() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex justify-evenly p-9">
        <div className="w-52 space-y-5">
          <label htmlFor="" className="font-bold text-white text-4xl">
            INSIRA AS INFORMAÇÕES
          </label>
          <Autocomplete
            id="descricao_produto"
            options={options}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input
                  type="text"
                  {...params.inputProps}
                  className="flex h-10 w-72 rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black mt-1 font-normal"
                  placeholder="INSIRA A DESCRIÇÃO DO PRODUTO"
                />
              </div>
            )}
          />
          <Input
            type="number"
            id="valor_produto"
            placeholder="VALOR DO PRODUTO"
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
          <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex items-center mt-1">
            <label htmlFor="" className="text-white">
              ADICIONAR À VENDA
            </label>
          </button>
        </div>
        <div className="w-[1024px] h-[640px] bg-[#053057] rounded-lg">
          <div className="p-8">
            <div className="flex justify-between">
              <label htmlFor="" className="text-white font-bold">
                DESCRIÇÃO DO PRODUTO
              </label>
              <div className="space-x-8">
                <label htmlFor="" className="text-white font-bold">
                  VALOR
                </label>
                <label htmlFor="" className="text-white font-bold">
                  QUANTIDADE
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
