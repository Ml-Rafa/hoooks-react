import {React, useReducer} from 'react'

export default function HookUseReducer() {


  // usando useReducer  consigo execultar uma função direta para alterar um estado 

  const [number, dispatch] = useReducer((state, action) => {

    return Math.floor(Math.random(state) * 100) 

  });

  return (
    <div>
      <h1>HookUseReducer</h1>
      <button onClick={dispatch} >Sotear numero</button>
      <p>Numero aleatório {number}</p>
    </div>
  )
}
