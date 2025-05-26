import { Table, Space } from "antd";
import { Student } from "src/types";

interface StudentsTableProps {
  students: Student[];
}

export default function StudentsTable({ students }: StudentsTableProps) {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'RA', dataIndex: 'ra', key: 'ra' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Grau', dataIndex: 'degreeId', key: 'degreeId' },
    { title: 'Classe', dataIndex: 'classId', key: 'classId' },
  ];

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Table 
        dataSource={students} 
        columns={columns} 
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </Space>
  );
}