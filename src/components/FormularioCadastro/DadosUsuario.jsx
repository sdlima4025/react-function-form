import React from "react";
import { TextField, Button } from "@mui/material";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        margin="normal"
        autoFocus
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
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
