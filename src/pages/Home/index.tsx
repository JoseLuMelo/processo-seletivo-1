import { Card, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';


const { Title } = Typography;

const HomePage = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      
      
      <Card>
        <Title level={4} style={{ textAlign: 'center', marginBottom: 32 }}>
          Selecione uma opção
        </Title>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Link to="/estudantes">
            <Card 
              hoverable 
              style={{ 
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#f0f9ff'
              }}
            >
              <Title level={4}>👨‍🎓 Estudantes</Title>
              <p>Gerenciar cadastro de estudantes</p>
            </Card>
          </Link>

          <Link to="/professores">
            <Card 
              hoverable 
              style={{ 
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#fff0f6'
              }}
            >
              <Title level={4}>👩‍🏫 Professores</Title>
              <p>Gerenciar cadastro de professores</p>
            </Card>
          </Link>
        </Space>
      </Card>
    </div>
  );
};

export default HomePage;