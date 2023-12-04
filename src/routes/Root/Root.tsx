import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';

function Root() {
  return (
    <div className="root">
      <Menu />
      <div className="page">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
