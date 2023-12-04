import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';

function Root() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="root">
      <Menu setMenuIsVisible={setMenuIsVisible} menuIsVisible={menuIsVisible} />
      <div className="page">
        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <Outlet />
      </div>
    </div>
  );
}

export default Root;
