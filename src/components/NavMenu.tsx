import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const NavMenu = () => {
    return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="estudantes">
        <Link to="/estudantes">Estudantes</Link>
      </Menu.Item>
      <Menu.Item key="professores">
        <Link to="/professores">Professores</Link>
      </Menu.Item>
    </Menu>        
    );
}
 
export default NavMenu;