// src/pages/Estudantes/index.tsx
import { useState, useEffect } from "react";
import { studentsData } from "src/constants/constants";
import { Card, Space, message } from "antd";
import StudentsTable from "./components/StudentsTable";
import ActionsToolbar from "./components/ActionsToolbar";
import EditStudentModal from "./components/EditModal";
import { Student } from "src/types";
import { generateMockStudents } from "src/services/studentUtils";

export default function EstudantesPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  
  useEffect(() => {
    setStudents(studentsData);
  }, []);

  const handleAddStudents = (count: number) => {
    setIsLoading(true);
    setTimeout(() => {
      const newStudents = generateMockStudents(students, count);
      setStudents(prev => [...prev, ...newStudents]);
      setIsLoading(false);
    }, 500);
  };

  const handleSaveStudent = (values: Partial<Student>) => {
    if (!editingStudent) return;
    
    setStudents(prev => prev.map(student => 
      student.id === editingStudent.id ? { ...student, ...values } : student
    ));
    setEditingStudent(null);
    message.success('Estudante atualizado com sucesso!');
  };

  return (
    <Card title="Lista de Estudantes" style={{ margin: '24px' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <ActionsToolbar 
          onAddStudents={handleAddStudents} 
          loading={isLoading} 
        />
        <StudentsTable 
          students={students} 
          onEdit={setEditingStudent}
        />
      </Space>

      <EditStudentModal
        open={!!editingStudent}
        student={editingStudent ?? undefined}
        onSave={handleSaveStudent}
        onCancel={() => setEditingStudent(null)}
      />
    </Card>
  );
}