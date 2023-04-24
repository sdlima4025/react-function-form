import React from "react";
import { Button, TextField } from "@mui/material";

function DadosEntrega() {
  return (
    <form>
      <TextField 
      id="cep" 
      label="CEP" 
      type="number" 
      required
      margin="normal" 
      autoFocus />

      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        required
        margin="normal"
        autoFocus
        fullWidth
      />

      <TextField
        id="numero"
        label="Numero"
        type="number"
        required
        margin="normal"
        autoFocus
      />

      <TextField
        id="estado"
        label="Estado"
        type="text"
        required
        margin="normal"
        autoFocus
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        required
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
