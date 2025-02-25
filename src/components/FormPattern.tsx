import React, { useState } from 'react';
import { 
  validateLetters, 
  validateLength, 
  validateEmail, 
  validatePhone, 
  validateNumbers 
} from './validation';

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberField: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    numberField: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let validationErrors = { name: '', email: '', phone: '', numberField: '' };

    // Validar nombre (solo letras y longitud mínima y máxima)
    validationErrors.name = validateLetters(formData.name) || validateLength(formData.name, 5, 40);

    // Validar correo electrónico
    validationErrors.email = validateEmail(formData.email);

    // Validar teléfono
    validationErrors.phone = validatePhone(formData.phone);

    // Validar número (solo números)
    validationErrors.numberField = validateNumbers(formData.numberField);

    setErrors(validationErrors);

    if (!validationErrors.name && !validationErrors.email && !validationErrors.phone && !validationErrors.numberField) {
      alert('Formulario enviado');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para el nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      {/* Campo para el correo electrónico */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      {/* Campo para el teléfono */}
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      </div>

      {/* Campo para el número */}
      <div>
        <label>Número:</label>
        <input
          type="text"
          name="numberField"
          value={formData.numberField}
          onChange={handleChange}
          required
        />
        {errors.numberField && <div style={{ color: 'red' }}>{errors.numberField}</div>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
