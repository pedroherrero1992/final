import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = () => {
  const data = [
    { id: 1, name: 'Pedro', age: 25 },
    { id: 2, name: 'Juan', age: 30 },
    { id: 3, name: 'Ana', age: 28 },
  ];

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data); // Convertir la lista de objetos a una hoja de Excel
    const wb = XLSX.utils.book_new(); // Crear un nuevo libro de Excel
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Añadir la hoja al libro
    XLSX.writeFile(wb, 'data.xlsx'); // Descargar el archivo Excel
  };

  return (
    <div>
      <button onClick={exportToExcel}>Exportar a Excel</button>
    </div>
  );
};

export default ExportToExcel;
