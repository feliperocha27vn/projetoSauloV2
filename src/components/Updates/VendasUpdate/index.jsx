import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const vendas = [
  {
    numeroVenda: 1234,
    usuario: "Romilson",
    dataGeracao: "06/06/2024",
    valorVenda: "5.200,00",
    situacao: "CONCLUIDA",
  },
  // Outras entradas aqui...
];

export default function VendasUpdate() {
  const navigate = useNavigate();
  const editarVenda = () => {
    navigate("/CadastroVenda");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="VENDAS REALIZADAS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label className="font-semibold">VENDA Nº</label>
              <label className="font-semibold text-center">DATA GERAÇÃO</label>
              <label className="font-semibold text-center">VALOR DA CONTA</label>
              <label className="font-semibold text-center">USUARIO</label>
              <label className="font-semibold text-center">STATUS</label>
              <label className="font-semibold text-center">AÇÕES</label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {vendas.map((conta) => (
                <div
                  key={conta.numeroVenda}
                  className="grid grid-cols-6 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label>{conta.numeroVenda}</label>
                  <label className="text-center">{conta.dataGeracao}</label>
                  <label className="text-center">R$ {conta.valorVenda}</label>
                  <label className="text-center">{conta.usuario}</label>
                  <label className="text-center">{conta.situacao}</label>
                  <label className="text-center">
                    <FontAwesomeIcon icon={faPencil} className="mr-5 cursor-pointer" onClick={editarVenda} />
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
