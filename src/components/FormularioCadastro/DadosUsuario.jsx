import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, ValidarCampos, possoEnviar] = useErros(validacoes);
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()) {
        aoEnviar({email, senha});
      }
    }}>
      <TextField
        value={email}
        onChange={(event)=> {
          setEmail(event.target.value)
        }}
        id="email"
        label="email"
        type="email"
        name="email"
        required
        margin="normal"
        autoFocus
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event)=> {
          setSenha(event.target.value)
        }}
        onBlur={ValidarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        type="password"
        name="senha"
        required
        margin="normal"
        fullWidth
      />
      <Button 
      type="submit" 
      variant="contained" 
      color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
