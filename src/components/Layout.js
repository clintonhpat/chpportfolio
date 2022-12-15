import NavBar from './NavBar.js';
import {Outlet} from 'react-router-dom';


function Layout() {
  return (    
    <div>
        <Outlet />
        <NavBar />
    </div>
  );
}

export default Layout;