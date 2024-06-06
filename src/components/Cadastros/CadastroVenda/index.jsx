import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";

const options = ["Option 1", "Option 2"];
const formaPagamento = ["Crédito", "Débito"];

export default function CadastroVenda() {
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex justify-evenly p-9 items">
        {/* informações sobre o produto */}
        <div className="w-52 space-y-5">
          <label htmlFor="" className="font-bold text-white text-4xl">
            INSIRA AS INFORMAÇÕES
          </label>
          {/* descrição produto */}
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
          {/* valor produto */}
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
          {/* botão para adicionar venda */}
          <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex items-center mt-1">
            <label htmlFor="" className="text-white">
              ADICIONAR À VENDA
            </label>
          </button>
        </div>
        {/* background list */}
        <div className="w-[1024px] h-[640px] bg-[#053057] rounded-lg">
          <div className="p-3">
            {/* grid listagem produtos */}
            <div className="grid grid-cols-3 row-auto justify-items-center">
              {/* descrições */}
              <label htmlFor="" className="text-white">
                DESCRIÇÃO PRODUTO
              </label>
              <label htmlFor="" className="text-white">
                VALOR
              </label>
              <label htmlFor="" className="text-white">
                QUANTIDADE
              </label>
              {/* list produtos */}
              <div className="border w-full flex justify-center">
                <label htmlFor="" className="text-white">
                  CAMISA POLO
                </label>
              </div>
              <div className="border w-full flex justify-center">
                <label htmlFor="" className="text-white">
                  R$ 150,00
                </label>
              </div>
              <div className="border w-full flex justify-center">
                <label htmlFor="" className="text-white">
                  20
                </label>
              </div>
            </div>
            {/* inputs */}
          </div>
          {/* campos para finalizar venda */}
          <div className="flex gap-x-2 pl-3">
            {/* campo quantidade parcelas */}
            <Input
              type="number"
              id="quantidade_parcelas"
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
            {/* campo forma de pagamento */}
            <Autocomplete
              id="forma_pagamento"
              options={formaPagamento}
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
                    placeholder="FORMA DE PAGAMENTO"
                  />
                </div>
              )}
            />
            {/* botão finalizar venda */}
            <button className="h-10 w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center mt-1">
              <label htmlFor="" className="text-white">
                FINALIZAR VENDA
              </label>
            </button>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
