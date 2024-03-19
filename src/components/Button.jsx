import React from "react";

function Button({texto, esBotonDeClick, manejarClick}) {
  return (
    <button
      className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Button;