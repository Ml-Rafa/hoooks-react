import React, {useReducer, useState} from 'react'

export default function Reducer() {
  

  // Aqui criei um arquivo pode ser um payload , uma lista, um array qualquer coisa ou quase 
  const initialTasks = [
    {id: 1, text: "lista de compras"},
    {id: 2, text: "lista carros"},
    {id: 3, text: "lista de casas"},

  ];

  // aqui é minha função reducer estado que quero manipular 
  const taskReducer = (state, action) => {
    switch (action.type)  {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText
        };
        setTaskText("");
        
        console.log("<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>." + newTask);
        return [...state, newTask]
      }
    };

  // declaração do reducer que vai fazer a alteração do estado, ele vai ativar a função taskReducer
  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  console.log("oque vem no initial" + initialTasks.id);


  const handleSubmit = (e) => {
    e.preventDefalt()

    dispatchTasks({ type: "ADD" })
  };


  return (
    <div>
      <h1>Reducer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
               onChange={(e) => setTaskText(e.target.value) }
               value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      
      {tasks.map((task) =>(
        <li key={task.id}>{task.text}</li>
      ))}
    </div>
  )
}
