// src\pages\Estudantes\components\StudentsTable\index.tsx
import { Table, Space } from "antd";
import { Student } from "src/types";
import { useState } from "react";
import type { TablePaginationConfig, TableProps } from 'antd';
import Filter from "../Filter";
import { degreesData, classesData } from "src/constants/constants";
import "src/styles.css"

interface StudentsTableProps {
  students: Student[];
  onEdit: (student: Student) => void;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
  // filters?: Record<string, FilterValue | null>;
}


export default function StudentsTable({ students, onEdit }: StudentsTableProps) {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
    },
  });
  
  const [degreeFilter, setDegreeFilter] = useState<number | null>(null);
  const [classFilter, setClassFilter] = useState<number | null>(null);


  const filteredData = students.filter(student => {
    const matchesDegree = degreeFilter ? student.degreeId === degreeFilter : true;
    const matchesClass = classFilter ? student.classId === classFilter : true;
    return matchesDegree && matchesClass;
  });

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'RA', dataIndex: 'ra', key: 'ra' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { 
      title: 'Grau', 
      dataIndex: 'degreeId', 
      key: 'degreeId',
      render: (degreeId: number) => degreesData.find(dd => dd.id == degreeId)?.name || ''
    },
    { title: 'Classe',
      dataIndex: 'classId',
      key: 'classId',
      render: (classId: number) => classesData[classId] || ''
    },
  ];

  const handleTableChange: TableProps<Student>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    setTableParams({
      pagination,
    });
  };

  const handleRowClick = (record: Student) => ({
    onClick: () => onEdit(record),
  });  

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Filter 
        students={students}
        degreeValue={degreeFilter}
        classValue={classFilter}
        onDegreeChange={setDegreeFilter}
        onClassChange={setClassFilter}
      />
      
      <Table<Student>
        dataSource={filteredData} 
        columns={columns} 
        rowKey="id"
        onRow={handleRowClick}
        pagination={{
          ...tableParams.pagination,
          total: filteredData.length,
        }}
        onChange={handleTableChange}
        scroll={{ x: true }}
        rowClassName="cursor-pointer hover:bg-gray-50"
      />
    </Space>
  );
}