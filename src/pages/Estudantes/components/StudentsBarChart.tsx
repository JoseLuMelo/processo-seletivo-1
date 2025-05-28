// src/pages/Estudantes/components/StudentsBarChart.tsx
import { Bar } from '@ant-design/charts';
import { Student } from 'src/types';
import { degreesData } from "src/constants/constants";

interface StudentsBarChartProps {
  students: Student[];
}

export default function StudentsBarChart({ students }: StudentsBarChartProps) {
  // Processa os dados para o gráfico
  const data = students.reduce((acc, student) => {
    const existingDegree = acc.find(item => item.degreeId === student.degreeId);
    if (existingDegree) {
      existingDegree.count++;
    } else {
      acc.push({ degreeId: student.degreeId, count: 1 });
    }
    return acc;
  }, [] as { degreeId: number; count: number }[]);

  const config = {
    data,
    xField: 'degreeId',
    yField: 'count',
		sort: {
			reverse: false
		},
    axis: {
			x: {
				labelFormatter: (degreeId: number) => degreesData.find(dd => dd.id == degreeId)?.name || ''
			}
    },
    legend: {
      position: 'top-right',
    },
    height: 400,
  };

  return <Bar {...config} />;
}