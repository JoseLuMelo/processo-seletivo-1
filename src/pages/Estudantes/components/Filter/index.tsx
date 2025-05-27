// src/pages/Estudantes/components/Filter/index.tsx
import { Space } from "antd";
import { Student } from "src/types";
import DegreeFilter from "./DegreeFilter";
import ClassFilter from "./ClassFilter";

interface FilterProps {
  students: Student[];
  degreeValue?: number | null;
  classValue?: number | null;
  onDegreeChange: (value: number | null) => void;
  onClassChange: (value: number | null) => void;
}

export default function Filter({
  students,
  degreeValue,
  classValue,
  onDegreeChange,
  onClassChange
}: FilterProps) {
  return (
    <Space>
      <DegreeFilter 
        students={students}
        value={degreeValue}
        onChange={onDegreeChange}
      />
      <ClassFilter
        students={students}
        value={classValue}
        onChange={onClassChange}
      />
    </Space>
  );
}