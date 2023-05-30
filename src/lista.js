import React from 'react'
import './index.css' 

function Item({ nombre, miembros }) {
    return miembros ? <li className="item">{nombre} ✔️</li> : <li>{nombre} ❌</li>;
  }
  
  function ListaMiembros() {
    return (
      <div className="list">
        <h2>Lista de miembros</h2>
        <ul class="listaNazi">
          <Item miembros={true} nombre={"del Pino Nicolas"} />
          <Item miembros={true} nombre={"Juan Sandoval"} />
          <Item miembros={true} nombre={"Reartes Bruno"} />
          <Item miembros={true} nombre={"Posadas Agustin"} />
          <Item miembros={false} nombre={"Goku"} />
          <Item miembros={false} nombre={"Naruto"} />
          <Item miembros={false} nombre={"Kaneki"} />
          <Item miembros={false} nombre={"Nacho"} />
        </ul>
      </div>    
    );
  }
  
  export default ListaMiembros;