import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';
// FORMULÁRIOS CONTROLADOS
function FormularioCadastro({aoEnviar, validarCPF}) {
  

  return (
    <>
    <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
    <DadosUsuario/>
    <DadosEntrega/>

    </>
  );
}

export default FormularioCadastro;
