import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import './Root.scss';

function Root() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <div className="root">
      <Menu setMenuIsVisible={setMenuIsVisible} menuIsVisible={menuIsVisible} />
      <div className="right__section">
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
