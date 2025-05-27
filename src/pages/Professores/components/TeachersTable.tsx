// src\pages\Professores\components\TeachersTable.tsx
import { Table, Space } from "antd";
import { Teacher } from "src/types";
import { useState } from "react";
import type { TablePaginationConfig, TableProps } from 'antd';
import { degreesData, classesData, mattersData } from "src/constants/constants";
import "src/styles.css"

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
  
  const [degreeFilter, setDegreeFilter] = useState<number | null>(null);
  const [classFilter, setClassFilter] = useState<number | null>(null);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Id Professor', dataIndex: 'teacherId', key: 'teacherId' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { 
        title: 'Matéria',
        dataIndex: 'matterId',
        key: 'matterId',
        render: (matterId: number) => mattersData.find(md => md.id == matterId)?.name || ""
    },
    { title: 'Classes',
      dataIndex: 'classId',
      key: 'classId',
      render: (classId: number) => classesData[classId] || ''
    },
  ];

  const handleTableChange: TableProps<Teacher>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    setTableParams({
      pagination,
    });
  };

  const handleRowClick = (record: Teacher) => ({
    onClick: () => onEdit(record),
  });  

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Table<Teacher>
        dataSource={teachers} 
        columns={columns} 
        rowKey="id"
        onRow={handleRowClick}
        pagination={{
          ...tableParams.pagination,
        }}
        onChange={handleTableChange}
        scroll={{ x: true }}
        rowClassName="cursor-pointer hover:bg-gray-50"
      />
    </Space>
  );
}