import React from "react";
import "./Input.css";
import { useNavigate } from "react-router-dom";

function InputComponent(props) {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };
  return (
    <div className="inputComponent">
      {props.img ? (
        <img
          src={props.img}
          onClick={() => handleImageClick(props.imgOnClick)}
        />
      ) : null}
      <input
        className={props.bgcolor}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default InputComponent;
