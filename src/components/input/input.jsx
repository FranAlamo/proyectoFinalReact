import React from "react";
import "./Input.css";

function InputComponent() {
  return (
    <div>
      <input className="inputComponent" type={props.type} value={props.value} onChange={props.onChange}></input>
    </div>
  );
}

export default InputComponent;
