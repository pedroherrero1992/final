import React, { useState } from 'react';

const Formulario: React.FC = () => {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    termsAccepted: false,
    selectedOptions: [] as string[], // Para los checkboxes
    incrementValue: 1, // El valor inicial del slider (empieza en 1)
  });

  // Manejador para cambios en los campos de texto, radio buttons y checkboxes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Si es un checkbox, actualizar el estado de los checkboxes seleccionados
      if (name === 'termsAccepted') {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({
          ...formData,
          selectedOptions: checked
            ? [...formData.selectedOptions, value]
            : formData.selectedOptions.filter(option => option !== value),
        });
      }
    } else if (type === 'radio') {
      // Si es un radio button, actualizar el valor del campo seleccionado
      setFormData({ ...formData, [name]: value });
    } else if (type === 'text' || type === 'email') {
      // Si es un campo de texto o email, actualizar el valor de ese campo
      setFormData({ ...formData, [name]: value });
    } else if (type === 'range') {
      // Si es un slider (range), actualizar el valor del contador
      setFormData({ ...formData, incrementValue: Number(value) });
    }
  };

  // Manejo de envío de formulario (para fines demostrativos, solo muestra los datos)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de texto para el nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
      </div>

      {/* Campo de texto para el correo electrónico */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo electrónico"
        />
      </div>

      {/* Radio buttons para seleccionar género */}
      <div>
        <label>Género:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          <label htmlFor="male">Masculino</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          <label htmlFor="female">Femenino</label>
        </div>
      </div>

      {/* Checkboxes para opciones seleccionables */}
      <div>
        <label>Intereses:</label>
        <div>
          <input
            type="checkbox"
            name="option1"
            value="option1"
            checked={formData.selectedOptions.includes('option1')}
            onChange={handleChange}
          />
          <label>Opción 1</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="option2"
            value="option2"
            checked={formData.selectedOptions.includes('option2')}
            onChange={handleChange}
          />
          <label>Opción 2</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="option3"
            value="option3"
            checked={formData.selectedOptions.includes('option3')}
            onChange={handleChange}
          />
          <label>Opción 3</label>
        </div>
      </div>

      {/* Checkbox para aceptar términos */}
      <div>
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
        />
        <label>Acepto los términos y condiciones</label>
      </div>

      {/* Campo incremental con slider */}
      <div>
        <label>Contador:</label>
        <div>
          <input
            type="range"
            name="incrementValue"
            min="1"
            max="100"
            value={formData.incrementValue}
            onChange={handleChange}
          />
          <span>{formData.incrementValue}</span> {/* Muestra el valor actual del slider */}
        </div>
      </div>

      {/* Botón de envío */}
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Formulario;
