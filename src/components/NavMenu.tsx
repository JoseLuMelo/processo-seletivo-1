// src/components/NavMenu/index.tsx
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const NavMenu = () => {
  const location = useLocation();
  
  return (
    <Menu 
      mode="horizontal" 
      theme="dark"
      selectedKeys={[location.pathname.split('/')[1] || 'home']}
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="estudantes">
        <Link to="/estudantes">Estudantes</Link>
      </Menu.Item>
      <Menu.Item key="professores">
        <Link to="/professores">Professores</Link>
      </Menu.Item>
    </Menu>        
  );
};

export default NavMenu;