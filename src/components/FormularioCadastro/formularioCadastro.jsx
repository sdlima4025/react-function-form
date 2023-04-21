import * as React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material/";

function FormularioCadastro() {
  return (
    <form  >
      <TextField id="nome" label="Nome" margin="normal" autoFocus fullWidth />
      <TextField id="sobrenome" label="Sobrenome" margin="normal" fullWidth />
      <TextField id="cpf" label="CPF" margin="normal" fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked />}
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
