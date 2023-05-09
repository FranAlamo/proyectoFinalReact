import React from "react";
import NavBar from "../../components/navbarcomponent/NavBar";
import "../buscador/buscador.css";
import BotonRegistro from "../../components/Boton/botonRegistro";
import { useState } from "react";
import dataTop20 from "../../components/dataTop20";


function Buscador() {
  const [dataTop20Todos, setdataTop20Todos] = useState(dataTop20);

  const mostrarTodo = () => {
    setdataTop20Todos(dataTop20);
  };

  return (
    <div className="titulo">
      <section className="buscadorTop">
        <h1>Buscador</h1>
        <BotonRegistro />

        <h3 style={{ display: "inline-block" }}>Top 20s</h3>
        <hr
          style={{
            display: "inline-block",
            marginLeft: "10px",
            height: "1px",
            width: "240px",
            border: "none",
            backgroundColor: "#E4E6E8",
          }}
        />
      </section>

      <div className="main">
        {dataTop20Todos.map((data) => (
          <Card key={data.id} data={data} mostrarTodo={mostrarTodo} />
        ))}
      </div>
      <NavBar activeImage={"imagen2"} />
    </div>
  );
}

function Card(props) {
  const { data, mostrarTodo } = props;

  return (
    <div className="card" onClick={mostrarTodo}>
      <img
        src={data.image}
        alt={data.artista}
        style={{ width: "152px", height: "152px" }}
      />

      <h4 className="cancion">{data.cancion}</h4>
      <h4 className="artista">{data.artista}</h4>
    </div>
  );
}

export default Buscador;
