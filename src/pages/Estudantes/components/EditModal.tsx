import { Modal, Form, Input, Select, message } from "antd";
import { Student } from "src/types";
import { classesData } from "src/constants/constants";
import { useEffect } from "react"; // Adicione esta importação

interface EditStudentModalProps {
  open: boolean;
  student?: Student;
  onSave: (values: Partial<Student>) => void;
  onCancel: () => void;
}

export default function EditStudentModal({ open, student, onSave, onCancel }: EditStudentModalProps) {
  const [form] = Form.useForm();

  const classOptions = Object.entries(classesData).map(([id, name]) => ({
    value: Number(id),
    label: name
  }));

  useEffect(() => {
    if (student) {
      form.setFieldsValue({
        name: student.name,
        classId: student.classId
      });
    }
  }, [student, form]);

  return (
    <Modal
      title="Editar Estudante"
      open={open}
      onOk={() => form.submit()}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={student}
        onFinish={onSave}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: 'Por favor insira o nome' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Classe"
          name="classId"
          rules={[{ required: true, message: 'Por favor selecione a classe' }]}
        >
          <Select options={classOptions} />
        </Form.Item>
      </Form>
    </Modal>
  );
}