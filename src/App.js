import "./App.css";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import logoFreecodecamp from "./images/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciar = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={logoFreecodecamp}
          alt="logo de freecodecamp"
        />
      </div>
      <div className="counter-container">
        <Counter count={numClicks} />
        <Button
          texto="Incrementar"
          esBotonDeClick={true}
          manejarClick={click}
        />
        <Button
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
