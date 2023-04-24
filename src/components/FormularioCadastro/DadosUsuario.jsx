import React from "react";
import { TextField, Button } from "@mui/material";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}
    
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        margin="normal"
        autoFocus
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        required
        margin="normal"
        autoFocus
        fullWidth
      />
      <Button 
      type="submit" 
      variant="contained" 
      color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
