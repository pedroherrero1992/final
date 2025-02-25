// Función de validación para un campo de solo letras
export const validateLetters = (value: string): string => {
    if (!/^[a-zA-Z]+$/.test(value)) {
      return 'Este campo solo puede contener letras.';
    }
    return ''; // No hay error
  };
  
  // Función de validación para un campo con longitud mínima y máxima
  export const validateLength = (value: string, min: number, max: number): string => {
    if (value.length < min || value.length > max) {
      return `La longitud debe estar entre ${min} y ${max} caracteres.`;
    }
    return ''; // No hay error
  };
  
  // Función de validación para un campo de correo electrónico
  export const validateEmail = (value: string): string => {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return 'Por favor, ingresa un correo electrónico válido.';
    }
    return ''; // No hay error
  };
  
  // Función de validación para un campo de teléfono (solo números, guiones, paréntesis y opcionalmente un +)
  export const validatePhone = (value: string): string => {
    if (!/^\+?[0-9\s\-\(\)]{7,15}$/.test(value)) {
      return 'El teléfono debe ser un número válido con formato opcional (+, -, paréntesis).';
    }
    return ''; // No hay error
  };
  
  // Función de validación para un campo que solo debe contener números
  export const validateNumbers = (value: string): string => {
    if (!/^\d+$/.test(value)) {
      return 'Este campo solo puede contener números.';
    }
    return ''; // No hay error
  };
  