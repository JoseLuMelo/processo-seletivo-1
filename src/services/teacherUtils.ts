// src/services/teacherUtils.ts
import { Teacher } from "src/types";
import teachersData from "src/constants/Teste-Front-End/teachers.json";
import relationshipsData from "src/constants/Teste-Front-End/relationships.json";

export const getCombinedTeachersData = (): Teacher[] => {
  return teachersData.map(teacher => {
    // Encontra o relacionamento correspondente ao professor
    const teacherRelationship = relationshipsData.find(
      rel => rel.teacherId === teacher.id
    );

    // Se não encontrar relacionamento, retorna dados básicos
    if (!teacherRelationship) {
      return {
        id: teacher.id,
        teacherId: teacher.id,
        name: teacher.name,
        matterId: 0, // Valor padrão
        degrees: []
      };
    }

    // Combina os dados
    return {
      id: teacher.id,
      teacherId: teacher.id,
      name: teacher.name,
      matterId: teacherRelationship.matterId,
      degrees: teacherRelationship.degrees.map(degree => ({
        degreeId: degree.degreeId,
        classes: degree.classes.map(classItem => ({
          classId: classItem.classId || 0
        }))
      }))
    };
  });
};