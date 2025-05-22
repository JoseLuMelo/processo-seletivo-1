import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EstudantesPage from './pages/Estudantes';
import ProfessoresPage from './pages/Professores';
import { Layout } from 'antd';
import NavMenu from './components/NavMenu';
import HomePage from './pages/Home';

const { Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <NavMenu />
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/estudantes" element={<EstudantesPage />} />
            <Route path="/professores" element={<ProfessoresPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}