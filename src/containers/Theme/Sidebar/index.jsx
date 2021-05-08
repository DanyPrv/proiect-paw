import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from '@coreui/react';

// sidebar nav config
import navigation, { allowedMenuItems } from '../../../_nav';
import logoNegative from '../../../assets/icons/logo-negatie.png';
import { selectUser } from '../../App/selectors';

const Sidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);
  const user = useSelector(selectUser);
  const [grantedMenuItems, setGrantedMenuItems] = useState([]);

  useEffect(() => {
    setGrantedMenuItems(allowedMenuItems(navigation));
    // eslint-disable-next-line
  }, [user]);
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <div className="c-sidebar-brand-full">
          <CImg
            src={logoNegative}
            height={35}
          />
          <span className="font-weight-bold ml-2" style={{ color: '#00fdfb' }}>Rent a car</span>
        </div>
        <CImg
          className="c-sidebar-brand-minimized"
          src={logoNegative}
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={grantedMenuItems}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default Sidebar;
