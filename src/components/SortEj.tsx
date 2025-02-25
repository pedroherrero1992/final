import React, { useState } from 'react';
import { sortData } from './Sort';

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  address: {
    city: string;
    country: string;
  };
  [key: string]: any; // Permite propiedades dinámicas
}

type SortDirection = 'ascending' | 'descending';

const Tabla: React.FC = () => {
  const [data, setData] = useState<Person[]>([
    { id: 1, name: 'Juan', age: 28, email: 'juan@example.com', address: { city: 'Buenos Aires', country: 'Argentina' } },
    { id: 2, name: 'Ana', age: 24, email: 'ana@example.com', address: { city: 'Madrid', country: 'España' } },
    { id: 3, name: 'Pedro', age: 30, email: 'pedro@example.com', address: { city: 'Barcelona', country: 'España' } },
    { id: 4, name: 'Laura', age: 26, email: 'laura@example.com', address: { city: 'Lima', country: 'Perú' } },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: 'address.city' as string, // Inicializamos con 'address.city' para ordenar por ciudad
    direction: 'ascending' as SortDirection,
  });

  const handleSort = (key: string) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending' 
      ? 'descending' 
      : 'ascending';
    setSortConfig({ key, direction });
  };

  // Usamos la función sortData para ordenar los datos
  const sortedData = sortData(data, sortConfig.key, sortConfig.direction);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Nombre</th>
            <th onClick={() => handleSort('age')}>Edad</th>
            <th onClick={() => handleSort('address.city')}>Ciudad</th>
            <th onClick={() => handleSort('address.country')}>País</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.address.city}</td>
              <td>{person.address.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
