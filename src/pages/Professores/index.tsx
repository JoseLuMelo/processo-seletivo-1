// src/pages/Estudantes/index.tsx
import { useState, useEffect } from "react";
import { teachersData } from "src/constants/constants";
import { Card, Space, message } from "antd";
import TeachersTable from "./components/TeachersTable";
import { Teacher } from "src/types";
import { getCombinedTeachersData } from "src/services/teacherUtils";

export default function EstudantesPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  
  useEffect(() => {
    const combinedData = getCombinedTeachersData();
    console.log("combinedData: ", combinedData)
    setTeachers(combinedData);
  }, []);


  return (
    <Card title="Lista de Professores" style={{ margin: '24px' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* <ActionsToolbar 
          onAddTeachers={handleAddTeachers} 
          loading={isLoading} 
        /> */}
        <TeachersTable 
          teachers={teachers} 
          onEdit={() => {}}
        />
      </Space>

      {/* <EditTeacherModal
        open={!!editingTeacher}
        teacher={editingTeacher ?? undefined}
        onSave={handleSaveTeacher}
        onCancel={() => setEditingTeacher(null)}
      /> */}
    </Card>
  );
}