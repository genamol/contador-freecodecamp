import React from "react";
import "../stylesheets/Counter.css";

function Counter({ count }) {
  return (
    <div className="counter"> 
    {count}
    </div>
  );
}

export default Counter;