import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registro de los componentes necesarios de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PedidoPieChart = ({ pedidos }: { pedidos: { instrumento: string }[] }) => {
  // Agrupamos los pedidos por instrumento
  const groupedByInstrument = pedidos.reduce((acc: any, pedido) => {
    acc[pedido.instrumento] = (acc[pedido.instrumento] || 0) + 1;
    return acc;
  }, {});

  // Preparamos los datos para el gráfico
  const labels = Object.keys(groupedByInstrument);
  const data = Object.values(groupedByInstrument);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Cantidad de Pedidos por Instrumento',
        data: data,
        backgroundColor: ['#FF9999', '#66B3FF', '#99FF99'],
      },
    ],
  };

  return (
    <div>
      <h2>Distribución de Pedidos por Instrumento</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PedidoPieChart;
