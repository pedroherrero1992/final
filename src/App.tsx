import React from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Card from './components/card/Card';
import Button from './components/btn/Button';

function App() {
  const handleClick = (buttonType: string) => {
    alert(`¡Hiciste clic en el botón ${buttonType}!`);
  };

  return (
    <div >
      <Button type="primary" onClick={() => handleClick('Primario')}>
        primario
      </Button>
      <Button type="secondary" onClick={() => handleClick('Secundario')}>
        secundario
      </Button>

      <div className="separador"></div>
      <Form></Form>

      <div className="separador"></div>
      <Table></Table>

      <div className="separador"></div>
      <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSkw2nEjil00Y_Vuw3j9JiDtAcjzol3Mfkw&s" altText="Otra imagen">
        <p>Otro contenido dentro de la tarjeta.</p>
      </Card>
    </div>
  );
}

export default App;
