// src\pages\Professores\components\TeachersTable.tsx
import { Table, Space, Tag, Typography } from "antd";
import { Teacher, Degree } from "src/types";
import { useState } from "react";
import type { TablePaginationConfig, TableProps } from 'antd';
import { degreesData, classesData, mattersData } from "src/constants/constants";
import { degreeRenderFunction, classesRenderFuncion } from "src/services/teacherUtils";
import TeacherDegreeFilter from "./TeacherDegreeFilter";
import "src/styles.css"

const { Title } = Typography

interface TeachersTableProps {
  teachers: Teacher[];
  onEdit: (teacher: Teacher) => void;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
  // filters?: Record<string, FilterValue | null>;
}


export default function StudentsTable({ teachers, onEdit }: TeachersTableProps) {
  
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    },
  });
  
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { 
      title: 'Matéria',
			dataIndex: 'matterId',
			key: 'matterId',
			render: (matterId: number) => mattersData.find(md => md.id == matterId)?.name || ""
    },
		{
			title: 'Graus',
			dataIndex: 'degrees',
			key: 'degrees',
      render: (degrees: Degree[]) => degreeRenderFunction(degrees)
		},
  ];
  
  const expandedRowRender = (teacher: Teacher) => {
    return (
      <div style={{ padding: 16 }}>
        <Title level={5} style={{ marginBottom: 16 }}>Detalhes de Graus e Classes</Title>
        
        {teacher.degrees.map((degree, index) => (
          <div key={index} style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
              {degreesData.find(d => d.id === degree.degreeId)?.name || `Grau ${degree.degreeId}`}
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {degree.classes.map((cls, clsIndex) => (
                <Tag key={clsIndex} color="geekblue">
                  {classesData[cls.classId] || `Classe ${cls.classId}`}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const [degreeFilter, setDegreeFilter] = useState<number | null>(null);
  
  const filteredTeachers = degreeFilter 
    ? teachers.filter(teacher => teacher.degrees.some(degree => degree.degreeId === degreeFilter)) 
    : teachers;
  
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <TeacherDegreeFilter
        teachers={teachers}
        value={degreeFilter}
        onChange={setDegreeFilter}
      />      
      <Table<Teacher>
        dataSource={filteredTeachers} 
        columns={columns} 
        rowKey="id"
        expandable={{
          expandedRowRender,
          rowExpandable: (teacher) => teacher.degrees.length > 0,
        }}
        pagination={{
          ...tableParams.pagination,
          total: teachers.length,
        }}
        scroll={{ x: true }}
      />
    </Space>
  );
}