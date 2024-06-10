import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const empresas = [
  {
    idEmpresa: 1234,
    nomeEmpresa: "Papelaria KHNJ",
    cidade: "Birigui",
    CNPJ: '45.526.789.0001/101'
  },
  // Outras entradas aqui...
];

export default function EmpresaUpdate() {
  const navigate = useNavigate();
  const editarVenda = () => {
    navigate("/CadastroEmpresa");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="EMPRESAS CADASTRADAS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID EMPRESA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME EMPRESA
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CIDADE
              </label>
              <label htmlFor="" className="font-semibold text-center">
                CNPJ
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {empresas.map((conta) => (
                <div
                  key={conta.idEmpresa}
                  className="grid grid-cols-5 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{conta.idEmpresa}</label>
                  <label htmlFor="" className="text-center">
                    {conta.nomeEmpresa}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.cidade}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.CNPJ}
                  </label>
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
