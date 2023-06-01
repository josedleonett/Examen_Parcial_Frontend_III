import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    colorFavorito: ""
  })

  const [formStatus, setFormStatus] = useState({
    inputNombreEsValido: false,
    inputColorFavoritoEsValido: false
  })


  const elNombreEsValido = (nombre) => {
    if (nombre[0] === " ") {
      return false      
    }
    if (nombre.length < 3) {
      return false      
    }

    return true;
  }

  const elColorEsValido = (color) => {
    return color.length > 6 ? true : false;    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatus((prevFormStatus) => ({
      ...prevFormStatus,
      inputNombreEsValido: elNombreEsValido(datosUsuario.nombre),
      inputColorFavoritoEsValido: elColorEsValido(datosUsuario.colorFavorito),
    }));    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type='text'
            placeholder='Ingrese su nombre'
            value={datosUsuario.nombre}
            onChange={(e) =>
              setDatosUsuario({ ...datosUsuario, nombre: e.target.value })
            }
          />
        </div>
        <div>
          <label>Color favorito: </label>
          <input
            type='text'
            placeholder='Ingrese su color favorito'
            value={datosUsuario.colorFavorito} 
            onChange={(e) => setDatosUsuario({...datosUsuario, colorFavorito: e.target.value})}
          />
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
        {!formStatus.inputNombreEsValido || !formStatus.inputColorFavoritoEsValido ? (
          <div>
            <p>Por favor, verifica que la información sea correcta</p>
          </div>
        ) : (
          <Card nombre={datosUsuario.nombre} colorFavorito={datosUsuario.colorFavorito} />
        )}
      </form>
    </>
  )
}

export default App


