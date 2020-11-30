import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    console.log('clicked')
    setModalState(!modalState);
  };
  return (
    <div className="App">
      <div className={`modalBackground modalShow-${modalState}`}>modal</div>
      <button onClick={() => manageState()}> Open Modal </button>
    </div>
  );
}

export default App;
