import React from "react";
import HookUseReducer from './components/HookUseReducer';
import HookUseState from './components/HookUseState';
import Reducer from "./components/Reducer";

function App() {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <Reducer/>     
    </div>
  );
}

export default App;
