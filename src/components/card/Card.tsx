import React from 'react';
import './styleCard.scss';

// Definimos las props que el componente va a recibir
interface CardProps {
  imageUrl: string;   // URL de la imagen
  altText: string;    // Texto alternativo para la imagen
  children?: React.ReactNode; // Contenido dinámico (puede ser cualquier cosa)
}

const Card: React.FC<CardProps> = ({ imageUrl, altText, children }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={altText} className="card-image" />
      <div className="card-content">
        {children} {/* Aquí renderizamos cualquier contenido que se pase al componente */}
      </div>
    </div>
  );
};

export default Card;
