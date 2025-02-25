import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registro de los componentes necesarios de Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const PedidoBarChart = ({ pedidos }: { pedidos: { fecha_pedido: string }[] }) => {
  // Agrupamos los pedidos por mes y año
  const groupedByMonthYear = pedidos.reduce((acc: any, pedido) => {
    const date = new Date(pedido.fecha_pedido);
    const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  // Preparamos los datos para el gráfico
  const labels = Object.keys(groupedByMonthYear);
  const data = Object.values(groupedByMonthYear);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Cantidad de Pedidos',
        data: data,
        backgroundColor: 'skyblue',
        borderColor: 'blue',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Cantidad de Pedidos por Mes y Año</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default PedidoBarChart;
