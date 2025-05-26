import { Table, Space } from "antd";
import { Student } from "src/types";
import type { AnyObject } from 'antd/es/_util/type';
import type { SorterResult } from 'antd/es/table/interface';
import type { GetProp, TableProps } from 'antd';
import { useState } from "react";


type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
  // filters?: Record<string, FilterValue | null>;
}

interface StudentsTableProps {
  students: Student[];
}

export default function StudentsTable({ students }: StudentsTableProps) {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      total: 0,
    },
  });
  
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'RA', dataIndex: 'ra', key: 'ra' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Grau', dataIndex: 'degreeId', key: 'degreeId' },
    { title: 'Classe', dataIndex: 'classId', key: 'classId' },
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


  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Table<Student>
        dataSource={students} 
        columns={columns} 
        rowKey="id"
        pagination={{
          ...tableParams.pagination,
          total: students.length,
        }}
        onChange={handleTableChange}
        scroll={{ x: true }}
      />
    </Space>
  );
}