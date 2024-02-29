// App.jsx

import React, { useState } from 'react';
import Card from './Card'; // Importa el componente Card desde su archivo correspondiente

function App() {
  const [nombreMascota, setNombreMascota] = useState(''); // Estado para el nombre de la mascota
  const [mensaje, setMensaje] = useState(''); // Estado para el mensaje
  const [error, setError] = useState(null); // Estado para manejar errores de validación
  const [showCard, setShowCard] = useState(false); // Estado para mostrar el componente Card

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación para el primer input: nombre de la mascota
    if (nombreMascota.length < 3 || nombreMascota.trim() === '') {
      setError('El nombre de la mascota debe tener al menos 3 caracteres y no puede comenzar con espacios en blanco.');
      setShowCard(false); // Oculta el componente Card si hay un error
      return;
    }

    // Validación para el segundo input: mensaje
    if (mensaje.length < 6) {
      setError('El mensaje debe tener al menos 6 caracteres.');
      setShowCard(false); // Oculta el componente Card si hay un error
      return;
    }

    // Si pasamos las validaciones, mostramos el componente Card con la información ingresada
    setShowCard(true);
    // Reiniciamos el estado de error
    setError(null);
  };

  return (
    <div className="App">
      <h1>Parcial Front End III Juan Pablo Ramírez</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre de la mascota:</label>
        <input 
          type="text" 
          value={nombreMascota} 
          onChange={(event) => setNombreMascota(event.target.value)} 
          required 
        />
        <label>Mensaje para la mascota:</label>
        <textarea 
          value={mensaje} 
          onChange={(event) => setMensaje(event.target.value)} 
          required 
        />
        <button type="submit">Enviar</button>
      </form>
      {error && (
        <p style={{ color: 'red' }}>
          {error} Por favor, chequea que la información sea correcta.
        </p>
      )}
      {showCard && (
        <Card nombreMascota={nombreMascota} mensaje={mensaje} />
      )}
    </div>
  );
}

export default App;
