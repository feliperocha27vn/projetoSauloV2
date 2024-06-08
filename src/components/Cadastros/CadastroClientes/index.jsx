import GradientWrapper from "../../GradientWrapper";
import BarMenu from "../../MenuBar";
import HeaderCadsatro from "../HeaderCadastro";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import { useState } from "react";



export default function cadastroCliente() {
  const [message, setMessage] = useState('');

  const cliente = () => {
    setMessage('CLIENTE CADASTRADO');
  }
  const [telefones, setTelefones] = useState(['']);

  const adicionarTelefone = () => {
    setTelefones([...telefones, '']);
  };

  const removerTelefone = (index) => {
    const novosTelefones = [...telefones];
    novosTelefones.splice(index, 1);
    setTelefones(novosTelefones);
  };

  const handleAddPhone = () => {
    adicionarTelefone();
  };

  const handleRemovePhone = (index) => {
    removerTelefone(index);
  };
  return (
    <GradientWrapper>
      <HeaderCadsatro label="CLIENTES" />
      <div className="flex justify-center items-center mt-10  ">
        {/* Formulario */}
        <form action="" className="flex flex-col gap-4 w-96">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              NOME:
            </Label>
            <Input
              type="text"
              id="nome_cliente"
              placeholder="Escreva o nome do cliente"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="endereco" className="text-white font-bold">
              ENDEREÇO:
            </Label>
            <Input
              type="text"
              id="endereco_cliente"
              placeholder="Informe o endereço do cliente"
            />
          </div>
          {telefones.map((telefone, index) => (
            <div key={index} className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor={`telefone${index + 1}`} className="text-white font-bold">
                TELEFONE {index + 1}:
              </Label>
              
              <div className="flex items-center">
                <Input
                  type="number"
                  id={`telefone${index + 1}_usuario`}
                  placeholder={`Adicione o telefone ${index + 1}`}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className="ml-2 text-white cursor-pointer"
                  onClick={handleAddPhone}
                />
                {index > 0 && (
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="ml-2 text-white cursor-pointer"
                    onClick={() => handleRemovePhone(index)}
                  />
                )}
              </div>
            </div>
          ))}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="nome" className="text-white font-bold">
              CIDADE:
            </Label>
            <Input
              type="text"
              id="cidade"
              placeholder="Escreva a cidade"
            />

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
            <Label htmlFor="telefone" className="text-white font-bold">
              TIPO DO CLIENTE:
            </Label>
            <Input
              type="number"
              id="tipo_cliente"
              placeholder="Informe a classificação do cliente"
            />
          </div>
     
          
          </div>
          {/* Autocomplete da empresa */}
       
          {/* botao */}
          <div className="flex justify-center">
            <button className="text-white bg-black font-bold w-[200px] h-[40px] rounded-xl" onClick={cliente}>
            Confirmar
            </button>
          </div>
          {message && (
            <div className="mt-4 lg:mt-12 p-2 bg-green-500 text-white rounded font-bold text-center">
              {message}
            </div>
          )}
        </form>
      </div>
      <BarMenu />
    </GradientWrapper>
  );
}
