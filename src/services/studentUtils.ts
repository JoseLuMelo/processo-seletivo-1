// src/services/studentUtils.ts
import { Student } from "src/types";

export const generateMockStudents = (existingStudents: Student[], count = 300): Student[] => {
  const lastId = existingStudents.length > 0 
    ? Math.max(...existingStudents.map(s => s.id)) 
    : 0;
  
  return Array.from({ length: count }, (_, i) => ({
    id: lastId + i + 1,
    ra: Math.floor(Math.random() * 90000) + 10000,
    name: `Aluno ${lastId + i + 1}`,
    degreeId: Math.floor(Math.random() * 12) + 1,  // Graus 1-5
    classId: Math.floor(Math.random() * 5) + 1   // Classes 1-6
  }));
};