import React, { useState, useEffect } from "react";
import studentsData from "src/Teste-Front-End/students.json";
import { AutoComplete, Table, Input, Card, Space, Typography } from "antd";
import type { SelectProps } from 'antd';

interface Student {
  id: number;
  ra: number;
  name: string;
  degreeId: number;
  classId: number;
}

export default function EstudantesPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setStudents(studentsData);
    setFilteredStudents(studentsData);
  }, []);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'RA', dataIndex: 'ra', key: 'ra' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Grau', dataIndex: 'degreeId', key: 'degreeId' },
    { title: 'Classe', dataIndex: 'classId', key: 'classId' },
  ];

  const searchOptions: SelectProps['options'] = students.map(student => ({
    value: student.name,
    label: (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{student.name}</span>
        <span style={{ color: '#888' }}>RA: {student.ra}</span>
      </div>
    ),
  }));

  const handleSearch = (value: string) => {
    setSearchText(value);
    if (value) {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(value.toLowerCase()) ||
        student.ra.toString().includes(value)
      );
      setFilteredStudents(filtered);
    } else {
      setFilteredStudents(students);
    }
  };

  return (
    <Card 
      title="Lista de Estudantes" 
      style={{ margin: '24px' }}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <AutoComplete
          style={{ width: '100%' }}
          options={searchOptions}
          onSelect={handleSearch}
          onSearch={handleSearch}
          value={searchText}
          placeholder="Pesquisar por nome ou RA"
        >
          <Input.Search 
            size="large"
            enterButton
            allowClear
          />
        </AutoComplete>

        <Table 
          dataSource={filteredStudents} 
          columns={columns} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Space>
    </Card>
  );
}