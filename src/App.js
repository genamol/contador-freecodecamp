import "./App.css";
import Button from "./components/Button.jsx";
import logoFreecodecamp from "./images/freecodecamp-logo.png";

function App() {
  const click = () => {
    console.log("Click !");
  };

  const reiniciar = () => {
    console.log("Reiniciar !");
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
