import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const produto = [
  {
    idProduto: 1234,
    Descrição: "Calça Jeans",
    Preço: "125,00",
  },
  // Outras entradas aqui...
];

export default function ProdutoUpdate() {
  const navigate = useNavigate();
  const editarProduto = () => {
    navigate("/CadastroProduto");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="PRODUTOS CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base mt-1">
              <label htmlFor="" className="font-semibold">
                ID PRODUTO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                DESCRIÇÕES
              </label>
              <label htmlFor="" className="font-semibold text-center">
                PREÇO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {produto.map((conta) => (
                <div
                  key={conta.idProduto}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{conta.idProduto}</label>
                  <label htmlFor="" className="text-center">
                    {conta.Descrição}
                  </label>
                  <label htmlFor="" className="text-center">
                    R${conta.Preço}
                  </label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={editarProduto} />
                    <FontAwesomeIcon icon={faCancel} color="red" className="cursor-pointer" />
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
