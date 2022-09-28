import React, { useState } from 'react'

export default function HookUseState() {
  const [frase, setFrase] = useState("Estado atual");
  const [contador, setContador] = useState(0);
  const [age, setAge] = useState(18);

  const mudarFrase = () => {
    setFrase(">> estado depois de clicado")
  };

  const contar = () => {

    setContador(contador + 1)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div>
      <div>
        <h1>useState</h1>
      </div>
      <div>
        <p>
          mudar frase
        </p>
        <button onClick={mudarFrase}>Mudar frase ?
        </button>
        <p>
          contar numeros
        </p>
      </div>
      <h2>{frase}  Pega o estado atual e Seta quando clicka no botão !!!</h2>
      <button onClick={contar}>Mudar numeros ?
      </button>
      <h2>{contador}  Contador</h2>
      <p>Input controlado !! </p>
      <h3>Digite sua idade ...</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} ></input>
        <input type="submit" value="Enviar"/>
      </form>
      <p>Voce tem <h1>{age}</h1>anos !!</p>
    </div>
  )
}
