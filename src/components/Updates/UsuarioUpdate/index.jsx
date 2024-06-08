import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCadsatro from "../../Cadastros/HeaderCadastro";
import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import { Input } from "@/components/ui/input";
import { faCancel, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const usuarios = [
  {
    idUsuario: 1234,
    nomeUsuario: "Romilson",
    papel: "CONCLUIDA",
  },
  // Outras entradas aqui...
];

export default function UsuarioUpdate() {
  const navigate = useNavigate();
  const editarVenda = () => {
    navigate("/CadastroUsuario");
  };

  return (
    <GradientWrapper>
      <HeaderCadsatro label="USUÁRIOS CADASTRADOS" />
      <div className="flex justify-center items-center mt-4 px-4">
        <div className="w-full max-w-5xl h-[30rem] rounded-3xl bg-[#053057] flex flex-col items-center">
          <div className="w-full border-2 border-black bg-white rounded-xl mt-6">
            {/* descrições */}
            <div className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base">
              <label htmlFor="" className="font-semibold">
                ID USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                NOME USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                PAPEL DO USUARIO
              </label>
              <label htmlFor="" className="font-semibold text-center">
                AÇÕES
              </label>
            </div>
            {/* list */}
            <div className="h-[300px] overflow-y-auto">
              {usuarios.map((conta) => (
                <div
                  key={conta.idUsuario}
                  className="grid grid-cols-4 p-2 border-b-2 border-black text-xs sm:text-sm md:text-base"
                >
                  <label htmlFor="">{conta.idUsuario}</label>
                  <label htmlFor="" className="text-center">
                    {conta.nomeUsuario}
                  </label>
                  <label htmlFor="" className="text-center">
                    {conta.papel}
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
