import React from "react";
const Card = ({nombreGrupo, mejorDisco, mejorSingle}) => {
  return (
    <div>
        <h3>Grupo: {nombreGrupo}</h3>
        <h3>Mejor disco: {mejorDisco}</h3>
        <h3>Mejor single: {mejorSingle} </h3>
    </div>
  )  
};
export default Card;
