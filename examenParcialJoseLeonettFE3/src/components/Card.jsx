import React from 'react'

const Card = ({nombre, colorFavorito}) => {
  return (
    <>
      <div style={{borderColor: "blue"}}>
        <h1>Hola {nombre}!</h1>
        <p>Sabemos que tu color favorito es:</p>
        <div style={{ backgroundColor: "green" }}>{colorFavorito}</div>
      </div>
    </>
  );
}

export default Card;