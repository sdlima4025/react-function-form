import React from "react";
import { Button, TextField } from "@mui/material";

function DadosEntrega() {
  return (
    <form>
      <TextField 
      id="cep" 
      label="CEP" 
      type="number" 
      margin="normal" 
      autoFocus />

      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        autoFocus
        fullWidth
      />

      <TextField
        id="numero"
        label="Numero"
        type="number"
        margin="normal"
        autoFocus
      />

      <TextField
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        autoFocus
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        autoFocus
      />

      <Button 
      type="submit" 
      variant="contained" 
      color="primary" 
      fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
