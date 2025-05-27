import { Select } from "antd";
import { Student } from "src/types";
import { classesData } from "src/constants/constants";

interface ClassFilterProps {
  students: Student[];
  value?: number | null;
  onChange: (value: number | null) => void;
}

export default function ClassFilter({ students, value, onChange }: ClassFilterProps) {
  const classOptions = Array.from(new Set(students.map(s => s.classId)))
    .sort((a, b) => a - b)
    .map(classId => ({
      value: classId,
      label: classesData[classId] || `Classe ${classId}`
    }));

  return (
    <Select
      placeholder="Filtrar por Classe"
      options={classOptions}
      allowClear
      style={{ width: 200 }}
      onChange={onChange}
      value={value}
    />
  );
}