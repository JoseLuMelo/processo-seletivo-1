// src/pages/Estudantes/components/ActionsToolbar/index.tsx
import { Button } from 'antd';
import { Student } from 'src/types';

interface ActionsToolbarProps {
  onAddStudents: (count: number) => void;
  loading?: boolean;
}

export default function ActionsToolbar({ onAddStudents, loading }: ActionsToolbarProps) {
  return (
    <Button 
      type="primary" 
      onClick={() => onAddStudents(300)}
      loading={loading}
      style={{ marginBottom: 16 }}
    >
      Adicionar 300 Alunos
    </Button>
  );
}