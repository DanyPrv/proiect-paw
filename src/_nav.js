import React from 'react';
import CIcon from '@coreui/icons-react';

// eslint-disable-next-line no-underscore-dangle
const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Locations',
    to: '/locations',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-location-pin" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cars',
    to: '/cars',
    // eslint-disable-next-line react/jsx-filename-extension
    icon: <CIcon name="cil-car-alt" customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;
