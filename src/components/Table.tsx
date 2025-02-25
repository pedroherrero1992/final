// components/Tabla.tsx

import React, { useState } from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}

// Interfaz para la configuración de ordenación
interface SortConfig {
  key: keyof Person;
  direction: 'ascending' | 'descending';
}

const Tabla: React.FC = () => {
  // Datos de ejemplo
  const [data, setData] = useState<Person[]>([
    { id: 1, name: 'Juan', age: 28, email: 'juan@example.com' },
    { id: 2, name: 'Ana', age: 24, email: 'ana@example.com' },
    { id: 3, name: 'Pedro', age: 30, email: 'pedro@example.com' },
    { id: 4, name: 'Laura', age: 26, email: 'laura@example.com' },
  ]);

  // Estado para manejar la columna y el orden de ordenación
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'name',
    direction: 'ascending',
  });

  // Función para manejar la ordenación
  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Función para cambiar el criterio de ordenación
  const handleSort = (key: keyof Person) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Nombre</th>
            <th onClick={() => handleSort('age')}>Edad</th>
            <th onClick={() => handleSort('email')}>Correo</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
