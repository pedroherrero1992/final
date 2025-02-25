// components/Tabla.tsx

import React, { useState } from 'react';
import Button from './btn/Button';

interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  contacto: Contacto[];
}

interface Contacto {
  mail:string,
  telefono: number

}
//contacto mail y telefono quiero que se muestre asociado
// Interfaz para la configuración de ordenación
interface SortConfig {
  key: keyof Person;
  direction: 'ascending' | 'descending';
}

const Tabla: React.FC = () => {
   const [showData, setShowData] = useState(false)
   const [selectecData, setSelectedData] = useState<Person>()
   
  // Datos de ejemplo
  const [data, setData] = useState<Person[]>([
    { id: 1, name: 'Juan', age: 28, email: 'juan@example.com',contacto: [] },
    { id: 2, name: 'Ana', age: 24, email: 'ana@example.com',contacto: [{mail:"anacorreo@algo.com", telefono: 5152312345},{mail:"anaasd@algo.com", telefono: 53212345}]  }, 
    { id: 3, name: 'Pedro', age: 30, email: 'pedro@example.com',contacto: [{mail:"pedrogera@algo.com", telefono: 42412345}]  },
    { id: 4, name: 'Laura', age: 26, email: 'laura@example.com',contacto: [{mail:"alber@algo.com", telefono: 2412345},{mail:"jose@algo.com", telefono: 2412345},{mail:"tercero@algo.com", telefono: 2112345}]  },
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

  const handleVerContacto = (person:Person)=>{
    setSelectedData(person)
    setShowData(true)
    console.log(person.contacto, data);
    

  }

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
              <td><Button type={person.contacto.length <= 0 ? "secondary": "primary"} onClick={()=>handleVerContacto(person)} disabled={person.contacto.length <= 0 }>ver contactos</Button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showData && <div style={{padding:10,position:'absolute', top:"50%", left:"30%", minHeight:200, minWidth:300, backgroundColor: '#3f3f87',borderRadius:25}}>

        <div>
          {selectecData?.contacto.map( (data, index)=> (
            <div key={index+"keyindexdiv"} style={{backgroundColor: index %2===0 ? 'white':'lightgrey', borderRadius:25, padding:15, marginBottom:5}}>
              <p>contacto {index+1}</p>
              <label key={index+"keyindexmail"}> Correo: {data.mail}</label>
              <label key={index+"keyindextelefono"}> Telefono: {data.telefono}</label>
            </div>
          ))}
          <div style={{textAlign:'center'}}>

          <Button onClick={() => { setShowData(false); } }  type="secondary">cerrar</Button>
          </div>
        </div>

      </div> }
    </div>
  );
};

export default Tabla;
