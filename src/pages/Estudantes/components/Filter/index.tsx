// src/pages/Estudantes/components/DegreeFilter/index.tsx
import { Select } from "antd";
import { Student } from "src/types";
import { degreesData } from "src/constants/constants";

interface DegreeFilterProps {
  students: Student[];
  value?: number | null;
  onChange: (value: number | null) => void;
}

export default function DegreeFilter({ students, value, onChange }: DegreeFilterProps) {
  const degreeOptions = Array.from(new Set(students.map(s => s.degreeId)))
    .sort((a, b) => a - b)
    .map(degreeId => ({
      value: degreeId,
      label: degreesData.find(dd => dd.id == degreeId)?.name || ''
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