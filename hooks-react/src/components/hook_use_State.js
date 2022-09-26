import React, { useState } from 'react'

export default function Hook_use_State() {

  const [frase, setFrase] = useState ('estado atual');
  const [contador, setContador] = useState (0);

  const mudarFrase = () => {
    setFrase(">> estado depois de clicado")
  };

  const contar = () => {

    setContador(contador + 1)
  };

  return (
    <div>
      <h3>useState</h3>
      <p>
        mudar frase
      </p>
      <button onClick={mudarFrase}>Mudar frase ?
      </button>
      <p>
        contar numeros
      </p>
      <h2>{frase}  Pega o estado atual e Seta quando clicka no botão !!!</h2>
      <button onClick={contar}>Mudar numeros ?
      </button>
      <h2>{contador}  Contador</h2>
    </div>
  )
}
