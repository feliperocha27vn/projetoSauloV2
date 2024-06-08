import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const options = ["Option 1", "Option 2"];
const formaPagamento = ["Crédito", "Débito"];

const cadastroVendas = [
  {
    descricaoProd: "Jaqueta Jeans",
    valor: "75,00",
    quantidade: "1",
  },
];

export default function CadastroVenda() {
  const [message, setMessage] = useState('');

  const finalizarVenda = () => {
    setMessage('VENDA FINALIZADA');
  }
  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDA" />
      <div className="flex flex-col lg:flex-row justify-evenly p-4 lg:p-9 items-center lg:items-start">
        {/* informações sobre o produto */}
        <div className="w-full lg:w-52 space-y-5 mb-4 lg:mb-0">
          <label htmlFor="" className="font-bold text-white text-xl lg:text-4xl">
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
                  className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
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
            id="quantidade_produto"
            placeholder="QUANTIDADE DO PRODUTO"
            className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black mt-1 font-normal"
            inputMode="numeric"
            pattern="\d*"
          />
          {/* botão para adicionar venda */}
          <button className="h-10 w-full lg:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex items-center justify-center mt-1">
            <label htmlFor="" className="text-white">
              ADICIONAR À VENDA
            </label>
          </button>
        </div>
        {/* background list */}
        <div className="w-full lg:w-[1024px] h-auto lg:h-[640px] bg-[#053057] rounded-lg flex flex-col items-center">
          <div className="w-full lg:w-11/12 border-2 border-black bg-white rounded-xl mt-4">
            {/* grid listagem produtos */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs lg:text-base">
              {/* descrições */}
              <label htmlFor="" className="font-semibold">
                DESCRIÇÃO PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                VALOR
              </label>
              <label htmlFor="" className="font-semibold text-center">
                QUANTIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                EXCLUIR ITEM
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {cadastroVendas.map((cadastroVenda) => (
                <div
                  key={cadastroVenda.descricaoProd}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs lg:text-base"
                >
                  <label htmlFor="" className="">
                    {cadastroVenda.descricaoProd}
                  </label>
                  <label htmlFor="" className="text-center">
                    R$ {cadastroVenda.valor}
                  </label>
                  <label htmlFor="" className="text-center">
                    {cadastroVenda.quantidade} UN
                  </label>
                  <label htmlFor="" className="text-center">
                    <FontAwesomeIcon icon={faTrash} color="red" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* inputs */}
          {/* campos para finalizar venda */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-x-2 px-4 lg:pl-3 mt-4 lg:mt-10 w-full lg:w-auto">
            {/* campo quantidade parcelas */}
            <Input
              type="number"
              id="quantidade_parcelas"
              placeholder="QUANTIDADE DE PARCELAS"
              className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
              bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
              file:text-sm file:font-medium placeholder:text-neutral-500 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
              focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
               dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                text-black font-normal"
              inputMode="numeric"
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
                    className="flex h-10 w-full lg:w-72 rounded-md border border-neutral-200
                    bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium placeholder:text-neutral-500 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 
                    focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                     dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950
                      dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300
                      text-black font-normal"
                    placeholder="FORMA DE PAGAMENTO"
                  />
                </div>
              )}
            />
            {/* botão finalizar venda */}
            <button className="h-10 w-full lg:w-36 bg-black rounded-xl border border-black px-3 py-2 text-xs flex justify-center items-center" onClick={finalizarVenda}>
              <label htmlFor="" className="text-white">
                FINALIZAR VENDA
              </label>
            </button>
          </div>
          {/* exibir mensagem de venda finalizada */}
          {message && (
            <div className="mt-4 lg:mt-12 p-2 bg-green-500 text-white rounded font-bold">
              {message}
            </div>
          )}
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
