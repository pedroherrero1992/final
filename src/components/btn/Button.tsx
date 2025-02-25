import React from 'react';
import './Button.scss'; // Importamos el archivo de estilos

interface ButtonProps {
  type: 'primary' | 'secondary'; // Definimos los tipos de botón (primario o secundario)
  onClick: () => void; // Función que se ejecutará al hacer clic en el botón
  children: React.ReactNode; // Contenido dentro del botón
  disabled?:boolean;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children,disabled }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
