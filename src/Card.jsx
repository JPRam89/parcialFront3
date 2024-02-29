import React from 'react';

function Card({ nombreMascota, mensaje }) {
  return (
    <div className="card">
      <h2>Felicidades {nombreMascota},</h2>
      <p>Tu amo y señor quiere darte un mensaje, el cual es que: "{mensaje}"</p>
    </div>
  );
}

export default Card;