// src/pages/Professores/components/TeacherDegreeFilter/index.tsx
import { Select } from "antd";
import { Teacher } from "src/types";
import { degreesData } from "src/constants/constants";

interface TeacherDegreeFilterProps {
  teachers: Teacher[];
  value?: number | null;
  onChange: (value: number | null) => void;
}

export default function TeacherDegreeFilter({ teachers, value, onChange }: TeacherDegreeFilterProps) {
  // Extrai todos os degreeIds únicos dos professores
  const allDegreeIds = teachers.flatMap(teacher => 
    teacher.degrees.map(degree => degree.degreeId)
  );

  const degreeOptions = Array.from(new Set(allDegreeIds))
    .sort((a, b) => a - b)
    .map(degreeId => ({
      value: degreeId,
      label: degreesData.find(d => d.id === degreeId)?.name || `Grau ${degreeId}`
    }));

  return (
    <Select
      placeholder="Filtrar por Grau"
      options={degreeOptions}
      allowClear
      style={{ width: 200 }}
      onChange={onChange}
      value={value}
    />
  );
}