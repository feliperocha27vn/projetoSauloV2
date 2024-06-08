import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import {
  faBoxesStacked,
  faHandHoldingDollar,
  faPercent,
  faSackDollar,
  faTags,
  faTicket,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

import { Navigate, useNavigate } from "react-router-dom";

export default function Administracao() {

  const navigater = useNavigate()

  const editarVenda= () =>{
    navigater("/VendasUpdate")
  }
  const editarUsuario=()=>{
    navigater("/UsuarioUpdate")
  }
  const editarForncededor=()=>{
    navigater("/fornecedorUpdate")
  }
  const editarProduto = ()=>{
    navigater("/produtoUpdate")
  }
  const editarCliente=()=>{
    navigater("/clienteUpdate")
  }
  const editarCategoria=()=>{
    navigater("/editarCategoria")
  }

  return (
    <GradientWrapper>
      <HeaderCadsatro label="ADMINISTRAÇÃO" />
      <div className="flex justify-center items-center h-[40rem] ">
        {/* grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-11">
          {/* contas a receber */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faSackDollar} className="h-[80px]" />
              <div className="flex justify-center w-full"  >
                <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarVenda}>
                VENDAS
              </label>
            </div>
          </div>
          {/* mais vendidos */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faUserFriends} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarUsuario}>
                USUARIOS
              </label>
            </div>
          </div>
          {/* mais vendidos por empresa */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBuilding} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarForncededor}>
                FORNECEDORES
              </label>
            </div>
          </div>
          {/* movimentação de estoque */}
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faBoxesStacked} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarProduto}>
                PRODUTOS
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faUser} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarCliente}>
                CLIENTES
              </label>
            </div>
          </div>
          <div className="bg-white p-2 flex items-center gap-x-6 rounded-lg w-[400px]">
            <FontAwesomeIcon icon={faTags} className="h-[80px]" />
            <div className="flex justify-center w-full">
              <label htmlFor="" className="font-bold font-sans text-lg"onClick={editarCategoria}>
                CATEGORIAS
              </label>
            </div>
          </div>
        </div>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
