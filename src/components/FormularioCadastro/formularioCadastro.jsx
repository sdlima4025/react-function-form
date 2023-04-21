import React from 'react';

function FormularioCadastro() {
  return(
    <form>
      <label>Nome:</label>
      <input type='text'/>
      <label>Sobre Nome:</label>
      <input type='text'/>
      <label>CPF:</label>
      <input type='text'/>
      <label>Promoções:</label>
      <input type='checkbox'/>
      <label>Novidades:</label>
      <input type='checkbox'/>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormularioCadastro;