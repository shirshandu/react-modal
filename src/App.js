import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    console.log("clicked");
    setModalState(!modalState);
  };
  return (
    <div className="App">
      <div className={`modalBackground modalShow-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1606669059257-19fc4ca49f79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Modal Image"
            />
          </div>
          <div className="modalText">
            <h2> This is a modal header </h2>
            <p>
              {" "}
              Labore culpa enim mollit anim est aute eu exercitation id commodo
              velit.
            </p>
          </div>
          <button className="exitButton" onClick={()=> manageState()}>Exit</button>
        </div>
      </div>
      <button className="open" onClick={() => manageState()}> Open Modal </button>
    </div>
  );
}

export default App;